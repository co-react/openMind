import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "../../apis/axios";
import requests from "../../apis/request";
import { calculateDateDifference } from "../../utils/dateCalculate";
import Button from "../buttons/Button";
import InputTextArea from "../input/InputTextArea";

function FeedCardAnswer({
  questionId,
  subjectId,
  answer,
  isClickEdit,
  isClickDelete,
  toggleIsEdit,
  toggleIsDelete,
}) {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState({});
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [state, setState] = useState("Empty");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchData = useCallback(async () => {
    if (subjectId) {
      try {
        const response = await axios.get(`${requests.SUBJECTS}${subjectId}/`);
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }
  }, [subjectId, isClickEdit, state]);

  const handleClickPost = useCallback(async () => {
    try {
      await axios.post(`${requests.QUESTIONS}${questionId}/answers/`, {
        questionId: 0,
        content: inputValue,
        isRejected: true,
        team: "string",
      });
      setContent(inputValue);
      setState("Sent");
    } catch (error) {
      console.error("에러 발생:", error);
    }
  });

  const handleClickEdit = useCallback(async () => {
    if (subjectId) {
      try {
        await axios.patch(`${requests.ANSWERS}${answer.id}/`, {
          content: content,
          isRejected: true,
        });
        toggleIsEdit();
      } catch (error) {
        console.error("에러 발생:", error);
      }
    }
  });

  useEffect(() => {
    fetchData();
    if (answer) {
      setContent(answer.content);
      setCreatedAt(answer.createdAt);
    }
  }, []);

  useEffect(() => {
    if (isClickDelete) {
      setState("Empty");
      toggleIsDelete();
    }
  }, [isClickDelete]);

  useEffect(() => {
    setState(answer !== null ? "Sent" : "Empty");
  }, [answer]);

  return (
    <CardAnswerContainer>
      <ProfileImage src={user.imageSource} />
      <AnswerContainer>
        <AnswerTop>
          <AnswerName>{user.name}</AnswerName>
          {createdAt && <AnswerDate>{calculateDateDifference(createdAt)}</AnswerDate>}
        </AnswerTop>
        {state === "Empty" ? (
          <>
            <InputTextArea
              placeholder="답변을 입력해주세요"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button variant="fill" disabled={inputValue.trim() === ""} onClick={handleClickPost}>
              답변달기
            </Button>
          </>
        ) : state === "Sent" ? (
          isClickEdit ? (
            <>
              <InputTextArea value={content} onChange={(e) => setContent(e.target.value)} />
              <Button variant="fill" disabled={content.trim() === ""} onClick={handleClickEdit}>
                수정하기
              </Button>
            </>
          ) : (
            <AnswerDescription>{content}</AnswerDescription>
          )
        ) : state === "Resection" ? (
          <AnswerResection>답변 거절</AnswerResection>
        ) : null}
      </AnswerContainer>
    </CardAnswerContainer>
  );
}

export default FeedCardAnswer;

const CardAnswerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 10rem;

  @media (min-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const AnswerTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

const AnswerName = styled.div`
  color: var(--Grayscale-60);
  font-size: 1.4rem;
  line-height: 133.333%;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AnswerDate = styled.div`
  font-size: 1.4rem;
  line-height: 128.571%;
`;

const AnswerDescription = styled.div`
  font-size: 1.6rem;
  line-height: 137.5%;
`;

const AnswerResection = styled.div`
  color: var(--Red-50);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 137.5%;
`;
