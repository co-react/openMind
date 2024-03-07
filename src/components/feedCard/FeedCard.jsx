import { useState } from "react";
import styled from "styled-components";

import FeedCardAnswer from "./FeedCardAnswer";
import FeedCardQuestion from "./FeedCardQuestion";
import moreIcon from "../../assets/svg/icons/more.svg";
import DisLike from "../../domain/reactions/DisLike";
import Like from "../../domain/reactions/Like";
import { calculateDateDifference } from "../../utils/dateCalculate";
import AnswerButton from "../badge/AnswerButton";
import EditDropdownMenu from "../dropdown/EditDropdownMenu";

function FeedCard({
  questionId,
  answer,
  content,
  createdAt,
  subjectId,
  state = "sent",
}) {
  const [isEditMenuVisible, setEditMenuVisible] = useState(false);

  const handleClick = () => {
    console.log(isEditMenuVisible);
    setEditMenuVisible(!isEditMenuVisible);
  };

  return (
    <FeedCardContainer>
      <CardTopContainer>
        <AnswerButton isAnswered={answer} />
        <KebabContainer>
          <KebabIcon src={moreIcon} onClick={handleClick} />
          {isEditMenuVisible && (
            <Temp>
              <EditDropdownMenu />
            </Temp>
          )}
        </KebabContainer>
      </CardTopContainer>
      <FeedCardQuestion
        createdAt={calculateDateDifference(createdAt)}
        content={content}
      />
      {answer && (
        <FeedCardAnswer subjectId={subjectId} answer={answer} state={state} />
      )}
      <CardFooter>
        <CardFooterContainer>
          <Like questionId={questionId} />
          <DisLike questionId={questionId} />
        </CardFooterContainer>
      </CardFooter>
    </FeedCardContainer>
  );
}

export default FeedCard;

const FeedCardContainer = styled.div`
  width: 100%;
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

const KebabContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const KebabIcon = styled.img`
  cursor: pointer;
  width: 26px;
  height: 26px;
`;

const Temp = styled.div`
  position: absolute;
  top: 25px;
`;
// 왜 안될까
// const DropdownMenu = styled(EditDropdownMenu)`
//   position: absolute;
//   top: 25px;
// `;

const CardFooter = styled.div`
  width: 100%;
  padding-top: 2.4rem;
  border-top: 1px solid var(--Grayscale-30);
`;

const CardFooterContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;
