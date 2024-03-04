import { useState, useCallback ,useEffect } from "react";

import axios from "../apis/axios";
import requests from "../apis/request";

export function useFetchQuestionSubject(id, isPostedQuestion, setIsPostedQuestion) {
  const [user, setUser] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${requests.SUBJECTS}${id}/`);
      const { data } = response;

      setUser(data);
      setIsPostedQuestion(false);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },[id, isPostedQuestion])

  useEffect(() => {
    fetchData();
  }, [id, isPostedQuestion])

  return user;
}