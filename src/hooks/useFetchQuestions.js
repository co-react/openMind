import { useState, useCallback, useEffect } from "react";

import axios from "../apis/axios";
import requests from "../apis/request";

export function useFetchQuestions(id, questionCount) {
  const [questions, setQuestions] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${requests.SUBJECTS}${id}/questions/`);
      const data = response.data;

      setQuestions(data.results);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },[questionCount])

  useEffect(() => {
    fetchData();
  }, [questionCount])

  return questions;
}