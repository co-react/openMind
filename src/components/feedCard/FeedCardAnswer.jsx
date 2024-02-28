import styled from "styled-components";
import InputTextArea from "../input/InputTextArea";
import Button from "../buttons/Button";

function FeedCardAnswer({ profile, ansName, ansDate, ansDesc, state }) {
  return (
    <CardAnswerContainer>
      <ProfileImage src={profile} alt="" />
      <AnswerContainer>
        <AnswerTop>
          <AnswerName>{ansName}</AnswerName>
          <AnswerDate>{ansDate}</AnswerDate>
        </AnswerTop>
        {state === "Empty" ? (
          <>
            <InputTextArea placeholder="답변을 입력해주세요" />
            <Button color="brown" disabled>
              답변완료
            </Button>
          </>
        ) : state === "Sent" ? (
          <AnswerDescription>{ansDesc}</AnswerDescription>
        ) : state === "Resection" ? (
          <AnswerResection>답변 거절</AnswerResection>
        ) : null}
      </AnswerContainer>
    </CardAnswerContainer>
  );
}

export default FeedCardAnswer;

const CardAnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const AnswerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const AnswerName = styled.div`
  color: var(--Grayscale-60);
  font-size: 1.8rem;
  line-height: 133.333%;
`;

const AnswerDate = styled.div`
  font-size: 1.4rem;
  line-height: 128.571%;
`;

const AnswerDescription = styled.div`
  font-size: 1.6rem;
  line-height: 137.5%;
`;

const AnswerResection = styled.div`
  color: var(--Red-50);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
`;
