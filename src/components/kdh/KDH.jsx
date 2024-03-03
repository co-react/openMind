import { useState } from "react";
import styled from "styled-components";
import QuestionModal from "../../domain/modal/QuestionModal";
// import ModalBackground from "../modal/ModalBackground";
import { ThemeModeButton } from "../buttons/ToggleButton";
import FeedCard from "../feedCard/FeedCard";

function KDH({ themeMode, toggleTheme }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  }
  return (
    <KDHBackground>
      <KdhTextArea>
        <h1>안녕하세요 감사해요 잘있어요 다시만나요 아침해가 뜨면~ 아침해가 뜨면~ </h1>
      </KdhTextArea>
      <FeedCard1></FeedCard1>
      <br />
      {isModalOpen && <QuestionModal onClose={handleClick} />}
      <Button onClick={handleClick}>클릭</Button>
      <ThemeModeButton themeMode={themeMode} toggleTheme={toggleTheme}></ThemeModeButton>
    </KDHBackground>
  );
}

export default KDH;

const Button = styled.button`
  width: 200px;
  height: 150px;
`;

const KDHBackground = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.colorMain};
  transition-property: background-color;
  transition-duration: 0.3s;
`;

const FeedCard1 = styled(FeedCard)`
  height: 50px;
  padding: 0;
`;

const KdhTextArea = styled.div`
  font-size: 80px;
  color: ${(props) => props.theme.colors.colorMainFont};
`;
