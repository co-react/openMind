import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

import emptyCard from "../assets/png/letter.png";
import { ReactComponent as MessageIcon } from "../assets/svg/icons/messages.svg";

import FeedCard from "../components/feedCard/FeedCard";
import { useFetchNextWithInfiniteScroll } from "../hooks/useFetchNextWithInfiniteScroll";
import { useFetchQuestions } from "../hooks/useFetchQuestions";

function FeedCardContainer({ id, questionCount, userName }) {
  if (!questionCount) {
    return (
      <Container $isQuestion={questionCount}>
        <QuestionContainer>
          <MessageIcons />
          <QuestionsCountText>아직 질문이 없습니다</QuestionsCountText>
        </QuestionContainer>
        <StyledEmptyCard src={emptyCard} />
      </Container>
    );
  }

  const [questions, next, setQuestions, setNext] = useFetchQuestions(id, questionCount);
  useFetchNextWithInfiniteScroll(next, setQuestions, setNext);

  const [hasAnswerCondition, setHasAnswerCondition] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const postId = location.pathname.split("/")[2];
    const isKeyInLocalStorage = localStorage.getItem(userName) == postId;

    if (isKeyInLocalStorage) {
      setHasAnswerCondition(true);
    } else {
      setHasAnswerCondition(false);
    }
  }, [location.pathname]);

  return (
    <Container $questionCount={questionCount}>
      <QuestionContainer>
        <MessageIcons />
        <QuestionsCountText>{questionCount}개의 질문이 있습니다</QuestionsCountText>
      </QuestionContainer>
      <FeedCardList>
        {questions.map(({ id, answer, content, createdAt, subjectId }) => (
          <FeedCard
            key={id}
            questionId={id}
            answer={answer}
            content={content}
            createdAt={createdAt}
            subjectId={subjectId}
            hasAnswerCondition={hasAnswerCondition}
          />
        ))}
      </FeedCardList>
    </Container>
  );
}

export default FeedCardContainer;

const Container = styled.div`
  margin-top: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32rem;
  padding: 1.6rem 2rem;
  gap: 1.6rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 1px solid ${(props) => props.theme.colors.colorBrown_20};
  background: ${(props) => props.theme.colors.colorQuestion};

  ${(props) =>
    !props.$questionCount &&
    css`
      height: 33rem;
      gap: 8rem;
    `}

  @media (min-width: 768px) {
    width: 70.4rem;
  }
`;

const MessageIcons = styled(MessageIcon)`
  filter: ${(props) =>
    props.theme.mode.now === "dark"
      ? "invert(100%) sepia(100%) saturate(22%) hue-rotate(318deg) brightness(104%) contrast(107%)"
      : "none"};
`;

const StyledEmptyCard = styled.img`
  width: 11.4rem;
  height: 11.8rem;
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const QuestionsCountText = styled.span`
  color: ${(props) => props.theme.colors.colorBrown_40};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const FeedCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
