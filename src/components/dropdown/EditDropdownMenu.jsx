import styled from "styled-components";

import { ReactComponent as DeleteIcon } from "../../assets/svg/icons/close.svg";
import { ReactComponent as EditIcon } from "../../assets/svg/icons/edit.svg";

function EditDropdownMenu({ className }) {
  return (
    <Container className={className}>
      <Wrapper>
        <EditIcon alt="수정하기 아이콘" />
        <Title>수정하기</Title>
      </Wrapper>
      <Wrapper>
        <DeleteIcon alt="삭제하기 아이콘" />
        <Title>삭제하기</Title>
      </Wrapper>
    </Container>
  );
}

export default EditDropdownMenu;

const Container = styled.div`
  display: flex;
  width: 10.3rem;
  box-sizing: content-box;
  padding: 0.4rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Grayscale-30, #cfcfcf);
  background: var(--Grayscale-10, #fff);
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(140, 140, 140, 0.25);
`;

const Title = styled.span`
  color: var(--Grayscale-50, #515151);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const Wrapper = styled.button`
  display: flex;
  padding: 0.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  background: var(--Grayscale-10, #fff);
  border: none;
  &:hover {
    svg {
      filter: invert(30%) sepia(87%) saturate(2359%) hue-rotate(204deg) brightness(100%)
        contrast(90%);
      transition: 0.5s;
    }

    ${Title} {
      color: #1877f2;
      transition: 0.5s;
    }
  }
`;
