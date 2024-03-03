import styled from "styled-components";

import moreIcon from "../../assets/svg/icons/more.svg";
import { calculateDateDifference } from "../../utils/dateCalculate"

import FeedCardAnswer from "./FeedCardAnswer";
import FeedCardQuestion from "./FeedCardQuestion";
import AnswerButton from "../badge/AnswerButton";
import Hate from "../reactions/Hate";
import Like from "../reactions/Like";

function FeedCard({
  answer,
  content,
  createdAt,
  like,
  dislike,
  subjectId,
  state="sent"
}) {
  return (
    <FeedCardContainer>
      <CardTopContainer>
        <AnswerButton isAnswered={answer} />
        <img src={moreIcon} alt="" />
      </CardTopContainer>
      <FeedCardQuestion createdAt={calculateDateDifference(createdAt)} content={content} />
      {answer && (
        <FeedCardAnswer
        subjectId={subjectId}
        answer={answer}
        state={state}
      />
      )}
      <CardFooter>
        <CardFooterContainer>
          <Like counts={like}/>
          <Hate isDislike={dislike}/>
        </CardFooterContainer>
      </CardFooter>
    </FeedCardContainer>
  );
}

export default FeedCard;

const FeedCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  border-radius: 1.6rem;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  @media (min-width: 768px) {
    width: 68.4rem;
    padding: 3.2rem;
    gap: 3.2rem;
  }
`;

const CardTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CardFooter = styled.div`
  width: 100%;
  padding-top: 2.4rem;
  border-top: 1px solid var(--Grayscale-30);
`;

const CardFooterContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;
