import { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as LogoIcon } from "../assets/svg/icons/logo.svg";

import FloatingButton from "../components/buttons/FloatingButton";
import ShareButton from "../components/buttons/ShareButton";
import Modal from "../components/modal/Modal";
import FeedCardContainer from "../domain/FeedCardContainer";
import Profile from "../domain/Profile";

function CardPage({id=3856}) { // 현재 id는 하드 코딩
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const handleClick = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  }

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
      <Profile subjectId={id} setter={setQuestionCount}/>
      <ShareButton />
      <FeedCardContainer id={id} questionCount={questionCount}/>
      <FloatingButtonLayout>
        <FloatingButton isMobile={isMobile} onClick={handleClick}/>
      </FloatingButtonLayout>
      {isOpenModal && 
        <Modal onClose={handleClick} id={id}/>
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

  @media (min-width: 768px) {
    width: 17rem;
    height: 6.7rem;
  }
`

const FloatingButtonLayout = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
`