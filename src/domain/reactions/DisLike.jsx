import { useState } from "react";
import styled, { css } from "styled-components";

import axios from "../../apis/axios";
import { ReactComponent as hateIcon } from "../../assets/svg/icons/thumbs-down.svg";

function DisLike({ questionId }) {
  const [isReacted, setIsReacted] = useState(false);

  const handleClick = async () => {
    try {
      await axios.post(`/question/${questionId}/reaction/`, {
        type: "like",
      });

      await axios.get(`/questions/${questionId}/`);
    } catch (error) {
      console.error('에러 발생:', error);
    }

    setIsReacted(true); // 싫어요 취소 역시 api delete 기능이 없음.
  };

  return (
    <Button $isClicked={isReacted} onClick={handleClick}>
      <ThumbsDown />
      <ButtonText>싫어요</ButtonText>
    </Button>
  );
}

export default DisLike;

const ButtonText = styled.span`
  color: var(--Grayscale-40, #818181);
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2rem;
`;

const ThumbsDown = styled(hateIcon)`
  filter: invert(54%) sepia(0%) saturate(9%) hue-rotate(156deg) brightness(93%) contrast(82%);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: none;
  background-color: #ffffff;
  ${(props) =>
    props.$isClicked &&
    css`
      ${ButtonText} {
        color: #000000;
      }

      ${ThumbsDown} {
        filter: invert(0%) sepia(100%) saturate(7500%) hue-rotate(61deg) brightness(106%)
          contrast(109%);
      }
    `}
`;
