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


{/* <>
      <Toaster 
        position="bottom-center"
        toastOptions={{
          style: {
            background: "white",
            color: "black",
          },
          className: 'class',
        }}
      />
      <button onClick={() => toast.success('URL이 복사되었습니다', {
          cancel: {
            label: '취소',
            onClick: () => console.log('Cancel!'),
          },
        })}
      >
        토스트
      </button>
    </> */}