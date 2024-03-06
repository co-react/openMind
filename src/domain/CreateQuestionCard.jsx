import { useState } from "react";
import axios from "../apis/axios";
import requests from "../apis/request";

import Button from "../components/buttons/ArrowIconButton";
import ErrorMessage from "../components/error/ErrorMessage";
import MainForm from "../components/input/Form";
import InputField from "../components/input/InputField";

import ERROR_MESSAGE from "../constants/message";

function CreateQuestionCard() {
  const [answerer, setAnswerer] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAnswerer(e.target.value);
    setError("");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const getData = await axios.get(requests.SUBJECTS);
      const nickNameList = getData.data.results.map((subject) => subject.name);

      if (nickNameList.includes(answerer)) {
        setError(ERROR_MESSAGE.NAME_ALREADY_IN_USE);
        return;
      }

      const response = await axios.post(requests.SUBJECTS, {
        name: answerer,
      });
      const { id } = response.data;
      localStorage.setItem(answerer, id);

      // id 를 통해 그 질문 받는 페이지로 이동
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <MainForm>
      <InputField
        placeholder="이름을 입력하세요"
        onChange={handleChange}
        onError={error}
      />
      {error && <ErrorMessage error={error} />}

      <Button variant="fill" onClick={handleClick}>
        질문 받기
      </Button>
    </MainForm>
  );
}

export default CreateQuestionCard;
