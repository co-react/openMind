import { useCallback, useEffect } from "react";
//import { Toaster, toast } from 'sonner'

import axios from "../../apis/axios";
import requests from "../../apis/request";

import CardPage from '../../pages/CardPage';


const NES = () => {
  const fetchData = useCallback(async () => {
    try {
      await axios.get(requests.SUBJECTS);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  });


  return (
    <CardPage />
  ); // 하드 코딩 -> 나중에 변경
};

export default NES;