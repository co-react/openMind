import { useEffect } from 'react';
import requests from '../../apis/request';

import CardPage from '../../pages/CardPage';


const NES = () => {
  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const data = await requests.getSubjects();
        console.log(data);
      } catch (error) {
        console.error('에러 발생:', error);
      }
    }

    fetchInitData();
  }, [])

  return (
    <CardPage />
  ); // 하드 코딩 -> 나중에 변경
};

export default NES;