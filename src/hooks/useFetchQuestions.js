import { useState, useCallback ,useEffect } from "react";

import axios from "../apis/axios";
import requests from "../apis/request";

export function useFetchQuestions(id) {
  const [user, setUser] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${requests.SUBJECTS}${id}/`);
      const { data } = response;

      setUser(data);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },[id])

  useEffect(() => {
    fetchData();
  }, [id])

  return user;
}