import { useState } from "react";
import styled from "styled-components";

import { useFetchQuestionSubject } from "../hooks/useFetchQuestionSubject";
import { useMediaQueryForMobile } from "../hooks/useMediaQueryForMobile";
//import { useOpenToast } from "../hooks/useOpenToast";
import { ReactComponent as LogoIcon } from "../assets/svg/icons/logo.svg";

import FloatingButton from "../components/buttons/FloatingButton";
import ShareButton from "../components/buttons/ShareButton";
//import Toast from "../components/toast/Toast";
import FeedCardContainer from "../domain/FeedCardContainer";
import QuestionModal from "../domain/modal/QuestionModal";

function CardPage({ id = 3856 }) {
  // 현재 id는 하드 코딩
  const [isPostedQuestion, setIsPostedQuestion] = useState(false);
  const isMobile = useMediaQueryForMobile();
  const [isOpenModal, setIsOpenModal] = useState(false);
  //const [isOpenToast, setIsOpenToast] = useOpenToast(false);
  const user = useFetchQuestionSubject(id, isPostedQuestion, setIsPostedQuestion);

  const handleClick = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  return (
    <Layout>
      <SmallStyledLogo />
      <ProfileImg src={user.imageSource} />
      <NameTitle>{user.name}</NameTitle>
      <ShareButton />
      <FeedCardContainer id={id} questionCount={user.questionCount}/>
      <FloatingButtonLayout>
        <FloatingButton isMobile={isMobile} onClick={handleClick} />
      </FloatingButtonLayout>
      {isOpenModal && (
        <QuestionModal
          onClose={handleClick}
          id={id}
          userName={user.name}
          imageSource={user.imageSource}
          setIsPostedQuestion={setIsPostedQuestion}
        />
      )}
    </Layout>
  );
}

export default CardPage;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

const SmallStyledLogo = styled(LogoIcon)`
  display: flex;
  width: 12.4rem;
  height: 4.9rem;
  margin-top: 4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 17rem;
    height: 6.7rem;
  }
`;

const FloatingButtonLayout = styled.div`
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
`

const NameTitle = styled.span`
  color: var(--Grayscale-60, #000);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;

const ProfileImg = styled.img`
  border-radius: 10rem;
  width: 10.4rem;
  height: 10.4rem;

  @media (min-width: 768px) {
    width: 13.6rem;
    height: 13.6rem;
  }
`

// const ToastLayout = styled.div`
//   position: fixed;
//   bottom: 10rem;

//   @media (min-width: 768px) {
//     bottom: 6rem;
//   }
// `