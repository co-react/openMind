import { styled } from "styled-components";

//일단 다른 컴포넌트에서 해당 게시글에 대한 답변이 되었다면
//isAnswered를 true로 아니면 false로 전달하면 될것 같습니다.

function AnswerButton({ isAnswered = true }) {
  return (
    <StyledButton isAnswered={isAnswered}>
      {isAnswered ? "답변 완료" : "미답변"}
    </StyledButton>
  );
}

export default AnswerButton;

const StyledButton = styled.button`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--Grayscale-10, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  border: ${({ isAnswered }) =>
    isAnswered
      ? "1px solid var(--Brown-40, #542f1a)"
      : "1px solid var(--Grayscale-40, #818181)"};
  color: ${({ isAnswered }) =>
    isAnswered ? "var(--Brown-40, #542f1a)" : "var(--Grayscale-40, #818181)"};
`;
