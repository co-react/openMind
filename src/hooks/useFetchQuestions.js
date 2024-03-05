import { useState, useCallback, useEffect } from "react";

import axios from "../apis/axios";
import requests from "../apis/request";

export function useFetchQuestions(id, questionCount) {
  const [questions, setQuestions] = useState([]);
  const [next, setNext] = useState("");

  const fetchInitData = useCallback(async () => {
    try {
      const response = await axios.get(`${requests.SUBJECTS}${id}/questions/`);
      const data = response.data;

      setNext(data.next);
      setQuestions(data.results);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },[questionCount])

  const fetchNextData = useCallback(async () => {
    try {
      const response = await axios.get(`${next}`);
      const data = response.data;
      const newQuestions = data.results;

      setNext(data.next);
      setQuestions((preQuestions) => [...preQuestions, ...newQuestions]);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },[next])

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;

    if (scrollPosition >= documentHeight) {
      fetchNextData();
    }
  };

  useEffect(() => {
    fetchInitData();
  }, [questionCount])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [next]); // 페이지 상태가 변경될 때마다 이펙트 재실행

  return questions;
}