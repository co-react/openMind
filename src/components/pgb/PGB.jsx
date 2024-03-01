import { useState } from "react";
import { useEffect } from "react";
import axios from "../../apis/axios";
import requests from "../../apis/request";

function PGB() {
  const [cardList, setCardList] = useState({});

  useEffect(() => {
    async function getCardList() {
      try {
        const response = await axios.get(requests.SUBJECTS);
        //console.log(response);
        setCardList(response);
        console.log(cardList);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }

    getCardList();
  }, []);
}

export default PGB;
