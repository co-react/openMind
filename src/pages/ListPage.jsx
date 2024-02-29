import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ReactComponent as NextArrow } from "../assets/svg/icons/next.svg";
import BaseButton from "../components/buttons/Button";
import Dropdown from "../components/dropdown/Dropdown";
import logo from "../assets/svg/icons/logo.svg";
import KDH from "../components/kdh/KDH";

function ListPage() {
  return (
    <Container>
      <HeaderDiv>
        <Header>
          <Link to={`/`} element={<KDH />}>
            <Logo src={logo} alt="로고 이미지" />
          </Link>
          <BaseButton>
            답변하러가기
            <NextArrow fill="#542F1A" />
          </BaseButton>
        </Header>
        <div>
          <Title>누구에게 질문할까요?</Title>
          <Dropdown />
        </div>
      </HeaderDiv>
    </Container>
  );
}

export default ListPage;

const Container = styled.div`
  width: 100%;
  height: 832px;
  background: var(--Grayscale-20, #f9f9f9);
`;

const HeaderDiv = styled.div`
  display: flex;
  padding: 40px 130px 40px 130px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const Logo = styled.img`
  width: 145.768px;
  height: 72.878px;
  flex-shrink: 0;
`;

const Title = styled.p`
  color: var(--Grayscale-60, #000);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
