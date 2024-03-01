import { useState } from "react";
import styled from "styled-components";

import { ReactComponent as ArrowDownIcon } from "../../assets/svg/icons/arrow-down.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/svg/icons/arrow-up.svg";

//import "./Dropdown.css";

function Dropdown() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  if (isOpened) {
    return (
      <Container>
        <Title>이름순</Title>
        <StyledArrowUpIcon onClick={handleClick} alt="접기" />
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
      <StyledArrowDownIcon onClick={handleClick} alt="펼치기" />
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  //align-self: stretch;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Grayscale-60, #000);
  background: var(--Grayscale-10, #fff);
  position: relative;
`;

const Title = styled.span`
  color: var(--Grayscale-40, #818181);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.8rem;
`;

const DropdownMenuContainer = styled.div`
  display: flex;
  width: 7.9rem;
  padding: 0.4rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--Grayscale-30, #cfcfcf);
  background: var(--Grayscale-10, #fff);

  /* 1pt */
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  position: absolute;
  bottom: -7.2rem;
`;

const DropdownMenu = styled.div`
  display: flex;
  padding: 0.6rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  &:hover {
    ${Title} {
      cursor: pointer;
      color: #1877f2;
      transition: 0.5s;
    }
  }
`;

const StyledArrowDownIcon = styled(ArrowDownIcon)`
  cursor: pointer;
`;

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  cursor: pointer;
`;
