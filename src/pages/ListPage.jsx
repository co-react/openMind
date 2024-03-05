import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "../apis/axios";
import requests from "../apis/request";
import { ReactComponent as ArrowLeftIcon } from "../assets/svg/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/icons/arrow-right.svg";
import logo from "../assets/svg/icons/logo.svg";
import BaseButton from "../components/buttons/ArrowIconButton";
import Dropdown from "../components/dropdown/Dropdown";
import KDH from "../components/kdh/KDH";
import Pagination from "../components/pagination/Pagination";
import UserCard from "../components/userCard/UserCard";

function ListPage() {
  const [cardList, setCardList] = useState([]);
  const [cards, setCards] = useState(0); //총 카드 수 28개
  const [pages, setPages] = useState(0); //총 페이지 수
  const [startPage, setStartPage] = useState(1); //시작 페이지
  const [endPage, setEndPage] = useState(3); //끝 페이지 (수정 필요)
  const [clickedPage, setClickedPage] = useState(1); //누른 페이지 숫자
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);
  const [sortUrl, setSortUrl] = useState("&sort=time");

  //오프셋 리미트를 위한 코드
  const offsetUrl = `?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    async function getCardList() {
      try {
        const response = await axios.get(
          requests.SUBJECTS + offsetUrl + sortUrl
        );
        setCardList(response.data);
        setCards(Number(response.data.count));
        setPages(Math.ceil(cards / 8)); // 총 페이지 수 계산
        setLimit(8);
        console.log("랜더링");
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }

    getCardList();
  }, [offset, sortUrl, cards]);

  //페이지네이션 랜더링 함수
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination
          isSelected={i === clickedPage}
          onClick={() => handleClickPage(i)}
          key={i}
        >
          {i}
        </Pagination>
      );
    }
    return pageNumbers;
  };

  //이름순 최신순을 고르면 URL이 바뀌는 코드
  //option값을 조건을 주어 sortUrl변경
  const handleSortOption = (option) => {
    if (option == "이름순") {
      setSortUrl("&sort=name");
    } else {
      setSortUrl("&sort=time");
    }
  };

  //페이지 네이션의 각 페이지 숫자를 클릭하면 실행되는 함수
  const handleClickPage = (i) => {
    setOffset(8 * i - 8);
    setClickedPage(i);
  };

  //페이지 네이션의 왼쪽 화살표를 누르면 실행되는 함수
  // < 4 5 >에서 < 누르면  3으로 가도록
  const handleBeforePage = () => {
    if (startPage == 1) {
      return;
    }
    setStartPage(startPage - 3);
    setClickedPage(startPage - 1);
    setOffset(8 * (startPage - 1) - 8);
    setEndPage(startPage - 1);
  };

  //페이지 네이션의 오른쪽 화살표를 누르면 실행되는 함수
  // < 1 2 3 >에서 > 누르면 4로 가도록
  const handleAfterPage = () => {
    if (endPage == pages) {
      return;
    }
    setStartPage(startPage + 3);
    setClickedPage(startPage + 3);
    setOffset(8 * (startPage + 3) - 8);
    //이 케이스는 페이지네이션을 일정한 값을 더해가면서 넘기는데
    //기존의 총 페이지 수보다 클 경우를 대비
    if (endPage + 3 > pages) {
      setEndPage(pages);
    } else {
      setEndPage(endPage + 3);
    }
  };

  return (
    <Container>
      <HeaderDiv>
        <Header>
          <Link to={`/`} element={<KDH />}>
            <Logo src={logo} alt="로고 이미지" />
          </Link>
          <BaseButton variant="outline" hasIcon>
            답변하러가기
          </BaseButton>
        </Header>
      </HeaderDiv>
      <TitleDiv>
        <Title>누구에게 질문할까요?</Title>
        <Dropdown onSelect={handleSortOption} />
      </TitleDiv>
      <CardListDiv>
        {cardList.results &&
          cardList.results.map((item) => (
            <>
              <UserCard
                key={item.id}
                profileImg={item.imageSource}
                profileName={item.name}
                questionCount={item.questionCount}
              ></UserCard>
              {/* <p>{cards}</p>
              <p>{nextUrl}</p> */}
            </>
          ))}
      </CardListDiv>
      <PaginationDiv>
        <StyledArrowLeftIcon onClick={handleBeforePage} />
        {renderPageNumbers()}
        <StyledArrowRightIcon onClick={handleAfterPage} />
      </PaginationDiv>
    </Container>
  );
}

export default ListPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--Grayscale-20, #f9f9f9);
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const CardListDiv = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(4, 22rem);
  gap: 2rem;
  margin-top: 3rem;
`;

const PaginationDiv = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const HeaderDiv = styled.div`
  display: flex;
  padding: 40px 130px 45px 130px;
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

const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  color: var(--Grayscale-40, #818181);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
`;

const StyledArrowRightIcon = styled(ArrowRightIcon)`
  color: var(--Grayscale-40, #818181);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Actor;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
`;
