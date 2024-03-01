import { useState } from "react";
import styled from "styled-components";
import profile from "../../assets/png/profile1.png";
import close from "../../assets/svg/icons/close.svg";
import messages from "../../assets/svg/icons/messages.svg";
import Button from "../buttons/Button";
import InputTextArea from "../input/InputTextArea";

function Modal({ onClose }) {
  const [inputValue, setInputValue] = useState("");

  const handleBackgroundClick = () => {
    onClose();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

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
            <ProfileImg src={profile} />
            아초는고양이
          </Profile>
          <InputTextArea
            placeholder="질문을 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button color="brown" disabled={inputValue.trim() === ""}>
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
  width: 612px;
  height: 454px;
  padding: 40px;
  border-radius: 24px;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

const CloseIcon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
`;

const MessageIcon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  gap: 8px;
`;

const Profile = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 133.333%;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin: 0 4px 0 4px;
`;
