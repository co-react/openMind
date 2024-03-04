import { useState } from "react";

import axios from "../apis/axios";
import requests from "../apis/request";

import Button from "../components/buttons/ArrowIconButton";
import MainForm from "../components/input/Form";
import InputField from "../components/input/InputField";

function CreateQuestionCard() {
  const [answerer, setAnswerer] = useState("");

  const handleChange = (e) => {
    setAnswerer(e.target.value);
  };

  const handleClick = async () => {
    try {
      await axios.post(requests.SUBJECTS, {
        name: answerer,
      });
      // 페이지 이동 적용
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <MainForm>
      <InputField placeholder="이름을 입력하세요" onChange={handleChange} />
      <Button variant="fill" onClick={handleClick}>
        질문 받기
      </Button>
    </MainForm>
  );
}

export default CreateQuestionCard;
