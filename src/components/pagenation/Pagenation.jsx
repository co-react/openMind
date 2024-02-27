import { styled, css } from "styled-components";

const PagenationBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const PagenationData = styled.p`
  color: var(--Grayscale-40, #818181);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    // 호버 시 적용될 스타일
    color: var(--Grayscale-60, #000);
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--Brown-40, #542f1a);
    `}
`;

function Pagenation({ isSelected }) {
  return (
    <PagenationBox>
      <PagenationData isSelected={isSelected}>1</PagenationData>
    </PagenationBox>
  );
}

export default Pagenation;
