import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 32.7rem;
  padding: 2.4rem;
  flex-direction: column;
  border-radius: 2.4rem;
  background: var(--Grayscale-10, #fff);
  box-shadow: var();
  &:focus {
    border-color: var(--Brown-40, #542f1a);
  }
`;

export default Form;
