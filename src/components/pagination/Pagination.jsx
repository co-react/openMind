import { styled, css } from "styled-components";

function Pagination({ isSelected }) {
  return (
    <PaginationBox>
      <PaginationData isSelected={isSelected}>1</PaginationData>
    </PaginationBox>
  );
}

export default Pagination;

const PaginationBox = styled.div`
  display: flex;
  width: 4rem;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const PaginationData = styled.p`
  color: var(--Grayscale-40, #818181);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem; /* 125% */

  @media (max-width: 768px) {
    font-size: 1.6rem;
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
