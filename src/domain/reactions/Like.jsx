import { useState } from "react";
import styled, { css } from "styled-components";

import axios from "../../apis/axios";
import { ReactComponent as likeIcon } from "../../assets/svg/icons/thumbs-up.svg";


function Like({ counts, questionId }) {
  const [isReacted, setIsReacted] = useState(false);
  const [countLike, setCountLike] =useState(counts);

  const handleClick = async () => {
    try {
      await axios.post(`/question/${questionId}/reaction/`, {
        type: "like",
      });

      const response = await axios.get(`/questions/${questionId}/`);
      const data = response.data;

      setCountLike(data.like);
    } catch (error) {
      console.error('에러 발생:', error);
    }

    setIsReacted(true); // 좋아요 취소는 api delete 기능이 없어서 불가능.
  };

  return (
    <Button type="button" $isClicked={isReacted} onClick={handleClick}>
      <ThumbsUp />
      {isReacted ? <ButtonText>좋아요 {countLike}</ButtonText> : <ButtonText>좋아요</ButtonText>}
    </Button>
  );
}

export default Like;

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

const ThumbsUp = styled(likeIcon)`
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
        color: #1877f2;
      }

      ${ThumbsUp} {
        filter: invert(48%) sepia(83%) saturate(6141%) hue-rotate(207deg) brightness(101%)
          contrast(90%);
      }
    `}
`;
