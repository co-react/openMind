import { useState, useEffect } from "react";

import requests from "../apis/request";

export function useFetchQuestions(id, questionCount) {
  const [questions, setQuestions] = useState([]);
  const [next, setNext] = useState("");

  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const data = await requests.getQuestions(id);
        
        setNext(data.next);
        setQuestions(data.results);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }

    fetchInitData();
  }, [questionCount])

  return [questions, next, setQuestions, setNext];
}