import React from "react";
import messageIcon from "../../assets/svg/Icons/messageIcon.svg";
import "./UserCard.css";

//프로필 사진과 프로필의 이름,
//그리고 9개라고 적힌것은 props로 받아야 할 것 같습니다.

function UserCard({ proFileImg, proFileName, questionCount }) {
  return (
    <div className="userCard">
      <div className="proFile">
        <img src={proFileImg} alt="프로필 사진" />
        <p>화면 출력용{proFileName}</p>
      </div>
      <div className="question">
        <div className="questionReceived">
          <img src={messageIcon} alt="메시지 아이콘" />
          <span>받은 질문</span>
        </div>
        <span>{questionCount}개</span>
      </div>
    </div>
  );
}

export default UserCard;
