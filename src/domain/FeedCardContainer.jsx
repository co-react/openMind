import styled, { css } from "styled-components";

import emptyCard from "../assets/png/letter.png";
import { ReactComponent as MessageIcon } from "../assets/svg/icons/messages.svg";

import FeedCard from "../components/feedCard/FeedCard";
import { useFetchQuestions } from "../hooks/useFetchQuestions";

function FeedCardContainer({ id, questionCount }) {
  if (!questionCount) {
    return (
      <Container $isQuestion={questionCount}>
        <QuestionContainer>
          <MessageIcon />
          <QuestionsCountText>아직 질문이 없습니다</QuestionsCountText>
        </QuestionContainer>
        <StyledEmptyCard src={emptyCard} />
      </Container>
    );
  }

  const questions = useFetchQuestions(id, questionCount);

  return (
    <Container $questionCount={questionCount}>
      <QuestionContainer>
        <MessageIcon />
        <QuestionsCountText>
          {questions.length}개의 질문이 있습니다
        </QuestionsCountText>
      </QuestionContainer>
      <FeedCardList>
        {questions.map(
          ({ id, answer, content, createdAt, like, subjectId }) => (
            <FeedCard
              key={id}
              questionId={id}
              answer={answer}
              content={content}
              createdAt={createdAt}
              like={like}
              subjectId={subjectId}
            />
          )
        )}
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
  border: 1px solid var(--Brown-20, #e4d5c9);
  background: var(--Brown-10, #f5f1ee);

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
  color: var(--Brown-40, #542f1a);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

const FeedCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
