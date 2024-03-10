import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { ReactComponent as NotFoundImage } from "../assets/svg/error-page.svg";
import Button from "../components/buttons/ArrowIconButton";
import Stack from "../components/common/Stack";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container gap={50}>
      <NotFoundImage />
      <FlexBox>
        <Link to="/">
          <Button hasIcon>메인 페이지</Button>
        </Link>
        <Button onClick={goBack} hasIcon>
          이전 페이지
        </Button>
      </FlexBox>
    </Container>
  );
};

export default NotFound;

const Container = styled(Stack)`
  height: 100vh;
  padding: 10rem 3rem;
  @media (min-width: 768px) {
    padding: 10rem 15rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: 150px;
  @media (min-width: 768px) {
    padding-bottom: 100px;
  }
`;
