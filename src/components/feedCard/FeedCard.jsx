import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import FeedCardAnswer from "./FeedCardAnswer";
import FeedCardQuestion from "./FeedCardQuestion";
import moreIcon from "../../assets/svg/icons/more.svg";
import DisLike from "../../domain/reactions/DisLike";
import Like from "../../domain/reactions/Like";
import { calculateDateDifference } from "../../utils/dateCalculate";
import AnswerButton from "../badge/AnswerButton";
import EditDropdownMenu from "../dropdown/EditDropdownMenu";

function FeedCard({ questionId, answer, content, createdAt, like, subjectId }) {
  const [isEditMenuVisible, setEditMenuVisible] = useState(false);
  const [state, setState] = useState("Empty");
  const [isAnswerPage, setIsAnswerPage] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setEditMenuVisible(!isEditMenuVisible);
  };

  // 위치가 변경될 때마다 상태 업데이트
  useEffect(() => {
    // 지금은 임시로 kdh 페이지일 때만 답변을 표시
    // localStorage 아이디 값과 answer페이지 아이디값과 일치하는지에 따라 answer 페이지를 보여줄지 말지 구현 예정
    setIsAnswerPage(location.pathname === "/kdh");
  }, [location.pathname]);

  useEffect(() => {
    // 거부되는 상황을
    if (answer != null) {
      setState("Sent");
    }
  });

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
      <FeedCardQuestion createdAt={calculateDateDifference(createdAt)} content={content} />
      {isAnswerPage && <FeedCardAnswer subjectId={subjectId} answer={answer} state={state} />}
      <CardFooter>
        <CardFooterContainer>
          <Like counts={like} questionId={questionId} />
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
