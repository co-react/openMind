import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import axios from "../apis/axios";
import requests from "../apis/request";
import profileAvatar from "../assets/png/profile1.png";
import { ReactComponent as LogoIcon } from "../assets/svg/icons/logo.svg";

import FloatingButton from "../components/buttons/FloatingButton";
import ShareButton from "../components/buttons/ShareButton";
import FeedCardContainer from "../components/feedCard/FeedCardContainer";
import Modal from "../components/modal/Modal";

function CardPage({name, id=3856}) { // 현재 id는 하드 코딩
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [questions, setQuestions] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${requests.SUBJECTS}${id}/questions/`);
      const data = response.data
      setQuestions(data.results);
      console.log(response);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },[])

  const handleClick = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(() => true);
      } else {
        setIsMobile(() => false);
      }
    };

    // 최초 호출
    handleResize();

    // 창 크기가 변경될 때마다 핸들러 호출
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <Layout>
      <SmallStyledLogo />
      <ProfileAvatar src={profileAvatar} />
      <NameTitle>{name}</NameTitle>
      <ShareButton />
      <FeedCardContainer questions={questions}/>
      <FloatingButtonLayout>
        <FloatingButton isMobile={isMobile} onClick={handleClick}/>
      </FloatingButtonLayout>
      {isOpenModal && 
        <Modal onClose={handleClick}/>
      }
    </Layout>
  )
}

export default CardPage

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`

const SmallStyledLogo = styled(LogoIcon)`
  display: flex;
  width: 12.4rem;
  height: 4.9rem;
  margin-top: 4.0rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`

const ProfileAvatar = styled.img``

const NameTitle = styled.span`
  color: var(--Grayscale-60, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Actor;
  font-size: 2.0rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.0rem;
`

const FloatingButtonLayout = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
`