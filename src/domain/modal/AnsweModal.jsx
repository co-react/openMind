import { useState } from "react";
import styled from "styled-components";
import ModalBackground from "./ModalBackground";
import close from "../../assets/svg/icons/close.svg";
import Button from "../../components/buttons/Button";
import InputField from "../../components/input/InputField";

function AnswerModal({ onClose }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <ModalBackground onClick={onClose}>
      <ModalTop>
        <Title>계정이 있으신가요? </Title>
        <CloseIcon src={close} onClick={onClose} />
      </ModalTop>
      <InputField placeholder="닉네임을 입력하세요" onChange={handleInputChange}></InputField>
      <Button variant="fill" disabled={inputValue.trim() === ""}>
        답변하러 가기
      </Button>
    </ModalBackground>
  );
}

export default AnswerModal;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

const CloseIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;
