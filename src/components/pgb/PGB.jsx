import { useState } from "react";
import { useEffect } from "react";
// import { styled } from "styled-components";
import axios from "../../apis/axios";
import requests from "../../apis/request";
// import Pagination from "../pagination/Pagination";
import UserCard from "../userCard/UserCard";

function PGB() {
  const [cardList, setCardList] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  //이름순 최신순을 위한 코드
  const sortTimeUrl = `?sort=time`;
  //const sortNameUrl = `?sort=name`;

  useEffect(() => {
    async function getCardList() {
      try {
        const response = await axios.get(requests.SUBJECTS + sortTimeUrl);
        setCardList(response.data);
        //console.log(response.data);
        //console.log(cardList.results);
        console.log(cardList);
        setNextUrl(cardList.next);
        console.log(nextUrl);
        //페이지네이션을 위한 계산코드?
        if (response.data.count) {
          setPages(Math.floor(Number(cardList.count) / 8) + 1);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }

    getCardList();
  }, []);

  // const renderPageNumbers = (pages) => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= pages; i++) {
  //     pageNumbers.push(<Pagination key={i}>{i}</Pagination>);
  //   }
  //   return pageNumbers;
  // };

  return (
    <div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          {cardList.results &&
            cardList.results.map((item) => (
              <>
                <UserCard
                  key={item.id}
                  profileImg={item.imageSource}
                  profileName={item.name}
                  questionCount={item.questionCount}
                ></UserCard>
                <p>{pages}</p>
              </>
            ))}
          {/* <PaginationDiv>{renderPageNumbers()}</PaginationDiv> */}
        </>
      )}
    </div>
  );
}

export default PGB;

// const PaginationDiv = styled.div`
//   margin-top: 80px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;
