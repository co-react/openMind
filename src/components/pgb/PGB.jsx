import { useState } from "react";
import { useEffect } from "react";
import axios from "../../apis/axios";
import requests from "../../apis/request";
import UserCard from "../userCard/UserCard";

function PGB() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    async function getCardList() {
      try {
        const response = await axios.get(requests.SUBJECTS);
        console.log(response.data);
        setCardList(response.data);
        console.log(cardList);
        console.log(cardList.results);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }

    getCardList();
  }, []);

  return (
    <div>
      {cardList.results.map((item) => (
        <>
          <UserCard
            profileImg={item.imageSource}
            profileName={item.name}
            questionCount={item.questionCount}
          ></UserCard>
        </>
      ))}
    </div>
  );
}

export default PGB;
