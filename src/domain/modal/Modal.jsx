import { useState } from "react";
import styled from "styled-components";

import axios from "../../apis/axios";
import requests from "../../apis/request";

import close from "../../assets/svg/icons/close.svg";
import messages from "../../assets/svg/icons/messages.svg";
import Button from "../../components/buttons/Button";
import InputTextArea from "../../components/input/InputTextArea";

function Modal({ onClose, id, userName, imageSource }) {
  const [inputValue, setInputValue] = useState("");

  const handleBackgroundClick = () => {
    onClose();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = async () => {
    try {
      await axios.post(`${requests.SUBJECTS}${id}/questions/`, {
        content: inputValue
      });

      onClose(); // 완료되면 닫음.
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }

  return (
    <Background onClick={handleBackgroundClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTop>
          <Title>
            <MessageIcon src={messages} />
            질문을 작성하세요
          </Title>
          <CloseIcon src={close} onClick={handleBackgroundClick} />
        </ModalTop>
        <ModalContents>
          <Profile>
            To.
            <ProfileImg src={imageSource} />
            {userName}
          </Profile>
          <ModalInputTextArea
            placeholder="질문을 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button color="brown" disabled={inputValue.trim() === ""} onClick={handleClick}>
            질문 보내기
          </Button>
        </ModalContents>
      </ModalContainer>
    </Background>
  );
}

export default Modal;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--Dim, rgba(0, 0, 0, 0.56));
  top: 0;
  left: 0;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32.7rem;
  height: 56.8rem;
  padding: 4.0rem;
  flex-shrink: 0;
  border-radius: 2.4rem;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0rem 1.6rem 2.0rem 0rem rgba(48, 48, 48, 0.62);
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  @media screen and (min-width: 768px) {
    width: 61.2rem;
    height: 45.4rem;
  }
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 2.0rem;
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

const MessageIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;

  @media screen and (min-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Profile = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 133%;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin: 0 4px 0 4px;
  border-radius: 10rem;
`;

const ModalInputTextArea = styled(InputTextArea)`
  height: 35.8rem;

  @media screen and (min-width: 768px) {
    height: 18.0rem;
  }
`