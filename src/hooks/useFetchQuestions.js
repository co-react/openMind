import { useState, useEffect } from "react";

import requests from "../apis/request";

export function useFetchQuestions(id, questionCount) {
  const [questions, setQuestions] = useState([]);
  const [next, setNext] = useState("");

  const fetchNextData = async () => {
    try {
      const data = await requests.getNext(next);

      const newQuestions = data.results;

      setNext(data.next);
      setQuestions((preQuestions) => [...preQuestions, ...newQuestions]);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;

    if (scrollPosition >= documentHeight) {
      fetchNextData();
    }
  };

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [next]); // 페이지 상태가 변경될 때마다 이펙트 재실행

  return questions;
}