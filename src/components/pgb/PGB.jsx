import { useState } from "react";
import { useEffect } from "react";
import { styled } from "styled-components";
import axios from "../../apis/axios";
import requests from "../../apis/request";
import { ReactComponent as ArrowLeftIcon } from "../../assets/svg/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/icons/arrow-right.svg";
import Dropdown from "../dropdown/Dropdown";
import Pagination from "../pagination/Pagination";
import UserCard from "../userCard/UserCard";

function PGB() {
  const [cardList, setCardList] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [cards, setCards] = useState(0); //총 카드 수 28개
  const [pages, setPages] = useState(0); //총 페이지 수
  const [startPage, setStartPage] = useState(1); //시작 페이지
  const [endPage, setEndPage] = useState(2); //끝 페이지 (수정 필요)
  const [clickedPage, setClickedPage] = useState(1); //누른 페이지 숫자
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);
  const [sortUrl, setSortUrl] = useState("&sort=time");

  //이름순 최신순을 위한 코드 api URL에 붙여줄 코드
  //const sortTimeUrl = `&sort=time`;
  //const sortNameUrl = `&sort=name`;

  //오프셋 리미트를 위한 코드
  const offsetUrl = `?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    async function getCardList() {
      try {
        const response = await axios.get(requests.SUBJECTS + offsetUrl + sortUrl);
        setCardList(response.data);
        setNextUrl(response.data.next);
        setCards(Number(response.data.count));
        setPages(Math.ceil(cards / 8)); // 총 페이지 수 계산
        setLimit(8);
        //setOffset(8);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }

    getCardList();
  }, [offset, sortUrl]);

  //페이지네이션 랜더링 함수
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination isSelected={i === clickedPage} onClick={() => handleClickPage(i)} key={i}>
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
  const handleBeforePage = () => {
    if (startPage == 1) {
      return;
    }
    setStartPage(startPage - 2);
    setEndPage(endPage - 2);
    setClickedPage(startPage - 2);
    setOffset(8 * (startPage - 2) - 8);
  };

  //페이지 네이션의 오른쪽 화살표를 누르면 실행되는 함수
  const handleAfterPage = () => {
    if (endPage == pages) {
      return;
    }
    setStartPage(startPage + 2);
    setClickedPage(startPage + 2);
    setOffset(8 * (startPage + 2) - 8);
    //이 케이스는 페이지네이션을 일정한 값을 더해가면서 넘기는데
    //기존의 총 페이지 수보다 클 경우를 대비
    if (endPage + 2 > pages) {
      setEndPage(pages);
    } else {
      setEndPage(endPage + 2);
    }
  };

  return (
    <div>
      <Dropdown onSelect={handleSortOption} />
      {cardList.results &&
        cardList.results.map((item) => (
          <>
            <UserCard
              key={item.id}
              profileImg={item.imageSource}
              profileName={item.name}
              questionCount={item.questionCount}
            ></UserCard>
            <p>{cards}</p>
            <p>{nextUrl}</p>
          </>
        ))}
      <PaginationDiv>
        <StyledArrowLeftIcon onClick={handleBeforePage} />
        {renderPageNumbers()}
        <StyledArrowRightIcon onClick={handleAfterPage} />
      </PaginationDiv>
    </div>
  );
}

export default PGB;

const PaginationDiv = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
