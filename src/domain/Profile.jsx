import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import axios from "../apis/axios";
import requests from "../apis/request";

function Profile({subjectId}) {
  const [user, setUser] = useState({})

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${requests.SUBJECTS}${subjectId}/`);
      const data = response.data;

      setUser(data)
    } catch (error) {
      console.error('에러 발생:', error);
    }
  },[])

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <ProfileImg src={user.imageSource}/>
      <NameTitle>{user.name}</NameTitle>
    </>
  )
}

export default Profile

const NameTitle = styled.span`
  color: var(--Grayscale-60, #000);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Actor;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.0rem;

  @media (min-width: 768px) {
    font-size: 3.2rem;
    line-height: 4.0rem;
  }
`

const ProfileImg = styled.img`
  border-radius: 10rem;
  width: 10.4rem;
  height: 10.4rem;

  @media (min-width: 768px) {
    width: 13.6rem;
    height: 13.6rem;
  }
`