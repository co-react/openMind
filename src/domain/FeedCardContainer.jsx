import styled from "styled-components";

import emptyCard from "../assets/png/letter.png";
import { ReactComponent as MessageIcon } from "../assets/svg/icons/messages.svg";

import FeedCard from "../components/feedCard/FeedCard";
import { useInfiniteQuestionsQuery } from "../hooks/api/useQueryWithAxios";

const OFFSET = 8;

function FeedCardContainer({ id }) {
  const {data, isSuccess, isPending} = useInfiniteQuestionsQuery({id, limit: OFFSET});

  return (
    <Container >
      <QuestionContainer>
        <MessageIcon />
        {isPending && 
          <QuestionsCountText>
            질문을 불러오고 있습니다
          </QuestionsCountText>
        }
        {isSuccess && data[0].count !== 0 &&
          <QuestionsCountText>
            {data[0].count}개의 질문이 있습니다
          </QuestionsCountText>
        }
        {isSuccess && data[0].count === 0 && 
          <QuestionsCountText>아직 질문이 없습니다</QuestionsCountText>
        }
      </QuestionContainer>
      {isSuccess && data[0].count !== 0 &&
        <FeedCardList>
          {data[0].results.map(
            ({ id, answer, content, createdAt, subjectId }) => (
              <FeedCard
                key={id}
                questionId={id}
                answer={answer}
                content={content}
                createdAt={createdAt}
                subjectId={subjectId}
              />
            )
          )}
        </FeedCardList>
      }
      {isSuccess && data[0].count === 0 && 
        <StyledEmptyCard src={emptyCard} />
      }
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
