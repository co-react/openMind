import { styled } from "styled-components";
import messageIcon from "../../assets/svg/icons/messageIcon.svg";

//프로필 사진과 프로필의 이름,
//그리고 9개라고 적힌것은 props로 받아야 할 것 같습니다.

function UserCard({ profileImg, profileName, questionCount }) {
  return (
    <CardContainer>
      <ProfileContainer>
        <ProfileImg src={profileImg} alt="프로필 사진" />
        <ProfileName>화면 출력용{profileName}</ProfileName>
      </ProfileContainer>
      <QuestionContainer>
        <QuestionDiv>
          <MessageIcon src={messageIcon} alt="메시지 아이콘" />
          <QuestionReceived>받은 질문</QuestionReceived>
        </QuestionDiv>
        <QuestionCount>{questionCount}개</QuestionCount>
      </QuestionContainer>
    </CardContainer>
  );
}

export default UserCard;

const CardContainer = styled.div`
  display: flex;
  width: 220px;
  height: 187px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--Grayscale-40, #818181);
  background: var(--Grayscale-10, #fff);
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: lightgray 50% / cover no-repeat, #d9d9d9;
`;

const ProfileName = styled.p`
  align-self: stretch;
  color: var(--Grayscale-60, #000);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
`;

const QuestionContainer = styled.div`
  display: flex;
  height: 22px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const QuestionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const MessageIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const QuestionReceived = styled.p`
  color: var(--Grayscale-40, #818181);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;

const QuestionCount = styled.span`
  color: var(--Grayscale-40, #818181);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;
