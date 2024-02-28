import styled from "styled-components";

import editIcon from "../../assets/svg/icons/edit.svg";
import deleteIcon from "../../assets/svg/icons/close.svg";

function EditDropdownMenu() {
  return (
    <Container>
      <Wrapper>
        <img src={editIcon} alt="수정하기 아이콘" />
        <Title>수정하기</Title>
      </Wrapper>
      <Wrapper>
        <img src={deleteIcon} alt="삭제하기 아이콘" />
        <Title>삭제하기</Title>
      </Wrapper>
    </Container>
  );
}

export default EditDropdownMenu;

const Container = styled.div`
  display: flex;
  width: 103px;
  box-sizing: content-box;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Grayscale-30, #cfcfcf);
  background: var(--Grayscale-10, #fff);
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);
`;

const Title = styled.span`
  color: var(--Grayscale-50, #515151);
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const Wrapper = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: var(--Grayscale-10, #fff);
  border: none;
  &:hover {
    img {
      filter: invert(30%) sepia(87%) saturate(2359%) hue-rotate(204deg) brightness(100%) contrast(90%);
      transition: 0.5s;
    }

    ${Title} {
      color: #1877f2;
      transition: 0.5s;
    }
  }
`;
