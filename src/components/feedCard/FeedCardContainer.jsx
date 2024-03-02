import styled from "styled-components"

import emptyCard from "../../assets/png/letter.png"
import { ReactComponent as MessageIcon } from "../../assets/svg/icons/messages.svg"

function FeedCardContainer({questions}) {
  if (!questions.length) {
    return (
      <Container>
        <QuestionContainer>
          <MessageIcon />
          <QuestionsCountText>아직 질문이 없습니다</QuestionsCountText>
        </QuestionContainer>
        <StyledEmptyCard src={emptyCard} />
      </Container>
    )
  }

  return (
    <Container></Container>
  )
}

export default FeedCardContainer

const Container = styled.div`
  margin-top: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32.0rem;
  height: 33.0rem;
  padding: 1.6rem 2.0rem;
  gap: 8.0rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 1px solid var(--Brown-20, #E4D5C9);
  background: var(--Brown-10, #F5F1EE);
`

const StyledEmptyCard = styled.img`
  width: 11.4rem;
  height: 11.8rem;
`

const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const QuestionsCountText = styled.span`
  color: var(--Brown-40, #542F1A);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Actor;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`