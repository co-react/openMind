import { useCallback, useEffect } from "react";

import requests from "../apis/request";

export function useFetchNextWithInfiniteScroll(next, setQuestions, setNext) {
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

  const handleScroll = useCallback(() => {
    const scrollPosition = innerHeight + document.documentElement.scrollTop;
    const documentHeight = document.documentElement.offsetHeight;

    if (scrollPosition >= documentHeight) {
      fetchNextData();
    }
  }, [next]);

  useEffect(() => {
    addEventListener('scroll', handleScroll);

    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, [next]); // 페이지 상태가 변경될 때마다 이펙트 재실행
}