// import { useCallback, useEffect, useRef, useState } from "react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import FeedCardAnswer from "./FeedCardAnswer";
import FeedCardQuestion from "./FeedCardQuestion";
// import axios from "../../apis/axios";
// import requests from "../../apis/request";
import moreIcon from "../../assets/svg/icons/more.svg";
import DisLike from "../../domain/reactions/DisLike";
import Like from "../../domain/reactions/Like";
import { calculateDateDifference } from "../../utils/dateCalculate";
import AnswerButton from "../badge/AnswerButton";
import EditDropdownMenu from "../dropdown/EditDropdownMenu";

function FeedCard({ questionId, answer, content, createdAt, subjectId }) {
  const [isEditMenuVisible, setEditMenuVisible] = useState(false);

  const [isAnswerPage, setIsAnswerPage] = useState(false);
  const [isClickEdit, setIsClickEdit] = useState(false);
  const [isClickDelete, setIsClickDelete] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef(null);

  // 드롭다운 외부 클릭 or 버튼 클릭시 꺼지게
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setEditMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  // 현재 위치에 따라 answer 보여줄지 말지, 나중에는 id값 비교 예정
  useEffect(() => {
    setIsAnswerPage(location.pathname === "/kdh");
  }, [location.pathname]);

  // 수정버튼을 눌렀을 때
  const handleEditClick = () => {
    setIsClickEdit(true);
    closeDropDownMenu();
  };

  // 삭제 버튼을 눌렀을 때
  const handleDeleteClick = () => {
    setIsClickDelete(true);
    setEditMenuVisible(false);
  };

  // 수정 상태 변환
  function toggleIsEdit() {
    setIsClickEdit(!isClickEdit);
  }

  // 삭제 상태 변환
  function toggleIsDelete() {
    setIsClickDelete(!isClickDelete);
  }

  function closeDropDownMenu() {
    setEditMenuVisible(false);
  }

  return (
    <FeedCardContainer>
      <CardTopContainer>
        <AnswerButton isAnswered={answer} />
        <KebabContainer ref={dropdownRef}>
          <KebabIcon src={moreIcon} onClick={() => setEditMenuVisible(!isEditMenuVisible)} />
          {isEditMenuVisible && (
            <DropdownMenu
              className={"DropdownMenu"}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          )}
        </KebabContainer>
      </CardTopContainer>
      <FeedCardQuestion createdAt={calculateDateDifference(createdAt)} content={content} />
      {isAnswerPage && (
        <FeedCardAnswer
          questionId={questionId}
          subjectId={subjectId}
          answer={answer}
          isClickEdit={isClickEdit}
          isClickDelete={isClickDelete}
          toggleIsEdit={toggleIsEdit}
          toggleIsDelete={toggleIsDelete}
        />
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

const DropdownMenu = styled(EditDropdownMenu)`
  position: absolute;
  top: 25px;
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
