import { useState } from "react";

import styled from "styled-components";
import AnswerModal from "../../domain/modal/AnswerModal";
import QuestionModal from "../../domain/modal/QuestionModal";
import CardPage from "../../pages/CardPage";
import FeedCard from "../feedCard/FeedCard";

function KDH() {
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);

  function handleClick() {
    setIsQuestionModalOpen((prev) => !prev);
  }

  function handleClickAnswer() {
    setIsAnswerModalOpen((prev) => !prev);
  }

  return (
    <>
      <KDHBackground>
        <KdhTextArea>
          <h1>안녕하세요 감사해요 잘있어요 다시만나요 아침해가 뜨면~ 아침해가 뜨면~ </h1>
        </KdhTextArea>
        <FeedCard1></FeedCard1>
        <br />
        {isQuestionModalOpen && <QuestionModal onClose={handleClick} />}
        {isAnswerModalOpen && <AnswerModal onClose={handleClickAnswer} />}
        <Button onClick={handleClick}>질문 모달 클릭</Button>
        <Button onClick={handleClickAnswer}>질문 모달 클릭</Button>
      </KDHBackground>
      <CardPage />
    </>
  );
}

export default KDH;

const Button = styled.button`
  width: 200px;
  height: 150px;
`;

const KDHBackground = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.colorMain};
  transition-property: background-color;
  transition-duration: 0.3s;
`;

const FeedCard1 = styled(FeedCard)`
  height: 50px;
  padding: 0;
`;

const KdhTextArea = styled.div`
  font-size: 80px;
  color: ${(props) => props.theme.colors.colorMainFont};
`;
