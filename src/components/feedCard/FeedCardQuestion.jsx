import styled from "styled-components";

function FeedCardQuestion({ queDate, queDesc }) {
  return (
    <QuestionContainer>
      <QuestionTitle>질문 · {queDate}</QuestionTitle>
      <QuestionDescription>{queDesc}</QuestionDescription>
    </QuestionContainer>
  );
}

export default FeedCardQuestion;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  width: 100%;
`;

const QuestionTitle = styled.div`
  font-size: 1.4rem;
  line-height: 18px;
  color: var(--Grayscale-40, #818181);
`;

const QuestionDescription = styled.div`
  width: 100%;
  word-wrap: break-word;
  font-size: 1.8rem;
  line-height: 133.333%;
`;
