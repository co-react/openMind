import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as ArrowDownIcon } from "../../assets/svg/icons/arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/svg/icons/arrow-up.svg";

function Dropdown() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  if (isOpened) {
    return (
      <Container>
        <Title>이름순</Title>
        <ArrowUpIcon onClick={handleClick} alt="접기" />
        <DropdownMenuContainer>
          <DropdownMenu>
            <Title>이름순</Title>
          </DropdownMenu>
          <DropdownMenu>
            <Title>최신순</Title>
          </DropdownMenu>
        </DropdownMenuContainer>
      </Container>
    ); // 추후에 메뉴는 props, map의 조합으로 작성할 예정입니다.
  }

  return (
    <Container>
      <Title>이름순</Title>
      <ArrowDownIcon onClick={handleClick} alt="펼치기" />
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--Grayscale-60, #000);
  background: var(--Grayscale-10, #FFF);
  position: absolute;
`

const Title = styled.span`
  color: var(--Grayscale-40, #818181);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem; 
`

const DropdownMenuContainer = styled.div`
  display: flex;
  width: 79px;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-30, #CFCFCF);
  background: var(--Grayscale-10, #FFF);

  /* 1pt */
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  position: absolute;
  bottom: -72px;
`

const DropdownMenu = styled.div`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  &:hover {
    ${Title} {
      cursor: pointer;
      color: #1877f2;
      transition: 0.5s;
    }
  }
`