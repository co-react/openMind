import styled from "styled-components";

const InputTextArea = styled.textarea`
  padding: 1.6rem;
  font-size: 1.6rem;
  outline: none;

  height: 32.6rem;
  border-radius: 0.8rem;
  background: var(--Grayscale-20, #f9f9f9);
  &:focus {
    border: 0.1rem solid var(--Brown-40, #542f1a);
  }
`;

export default InputTextArea;
