import styled from "styled-components";
import Modal from "./Modal.jsx";

function ModalBackground({ onClose }) {
  const handleBackgroundClick = () => {
    onClose();
  };

  return (
    <Background onClick={handleBackgroundClick}>
      <Modal />
    </Background>
  );
}

export default ModalBackground;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--Dim, rgba(0, 0, 0, 0.56));
  top: 0;
  left: 0;
`;
