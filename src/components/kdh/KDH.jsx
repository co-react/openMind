import { useState } from "react";
import styled from "styled-components";
import FeedCard from "../feedCard/FeedCard";
import Modal from "../modal/Modal";
// import ModalBackground from "../modal/ModalBackground";

function KDH() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleClick() {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  }
  return (
    <div>
      <FeedCard></FeedCard>
      <br />
      {isModalOpen && <Modal onClose={handleClick} />}
      <Button onClick={handleClick}>클릭</Button>
    </div>
  );
}

export default KDH;

const Button = styled.button`
  width: 200px;
  height: 150px;
`;
