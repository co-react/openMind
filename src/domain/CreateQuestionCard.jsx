import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import BASEURL from "../apis/axios";
import REQUEST from "../apis/request";

import Button from "../components/buttons/ArrowIconButton";
import ErrorMessage from "../components/error/ErrorMessage";
import MainForm from "../components/input/Form";
import InputField from "../components/input/InputField";

import ERROR_MESSAGE from "../constants/message";
import { useInfiniteSubjectsQuery } from "../hooks/api/useQueryWithAxios";
import { useGetAllData } from "../hooks/useGetAllData";
import validateInput from "../utils/validate/validateInput";

const OFFSET = 8;

function CreateQuestionCard() {
  const navigate = useNavigate();
  const {data, fetchNextPage} = useInfiniteSubjectsQuery({limit: OFFSET});
  useGetAllData({data, callback: fetchNextPage});
  const [answerer, setAnswerer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleChange = (e) => {
    setAnswerer(e.target.value);
    setErrorMessage("");
  };

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const validate = validateInput(answerer);
        if (validate) {
          setErrorMessage(validate);
          return;
        }
        const nicknameList = data.results.map((result) => result.name);
        if (nicknameList.includes(answerer)) {
          setErrorMessage(ERROR_MESSAGE.NAME_ALREADY_IN_USE);
          return;
        }

        const response = await BASEURL.post(REQUEST.SUBJECTS, {
          name: answerer,
        });
        const { id } = response.data;
        localStorage.setItem(answerer, id);

        navigate(`/post/${id}/answer`);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    },
    [answerer]
  );

  return (
    <MainForm>
      <InputField placeholder="이름을 입력하세요" onChange={handleChange} hasError={errorMessage} />
      {errorMessage && <ErrorMessage error={errorMessage} />}

      <Button variant="fill" onClick={handleClick}>
        질문 받기
      </Button>
    </MainForm>
  );
}

export default CreateQuestionCard;
