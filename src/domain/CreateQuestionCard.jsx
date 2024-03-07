import { useState } from "react";
import BASEURL from "../apis/axios";
import getAllData from "../apis/getDataAll";
import REQUEST from "../apis/request";

import Button from "../components/buttons/ArrowIconButton";
import ErrorMessage from "../components/error/ErrorMessage";
import MainForm from "../components/input/Form";
import InputField from "../components/input/InputField";

import ERROR_MESSAGE from "../constants/message";
import validateInput from "../utils/validate/validateInput";

function CreateQuestionCard() {
  const [answerer, setAnswerer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setAnswerer(e.target.value);
    setErrorMessage("");
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const validate = validateInput(answerer);
      if (validate) {
        setErrorMessage(validate);
        return;
      }
      const nicknameList = (await getAllData(REQUEST.SUBJECTS)).map(
        (data) => data.name
      );
      if (nicknameList.includes(answerer)) {
        setErrorMessage(ERROR_MESSAGE.NAME_ALREADY_IN_USE);
        return;
      }

      const response = await BASEURL.post(REQUEST.SUBJECTS, {
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
        hasError={errorMessage}
      />
      {errorMessage && <ErrorMessage error={errorMessage} />}

      <Button variant="fill" onClick={handleClick}>
        질문 받기
      </Button>
    </MainForm>
  );
}

export default CreateQuestionCard;
