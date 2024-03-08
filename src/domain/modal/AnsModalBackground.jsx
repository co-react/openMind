import styled from "styled-components";

function AnsModalBackground({ onClick, children }) {
  return (
    <Background onClick={onClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </Background>
  );
}

export default AnsModalBackground;

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
  width: 40rem;
  height: 28rem;
  padding: 4rem;
  flex-shrink: 0;
  border-radius: 2.4rem;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0rem 1.6rem 2rem 0rem rgba(48, 48, 48, 0.62);
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  @media screen and (min-width: 768px) {
    width: 61.2rem;
    height: 29rem;
  }
`;
