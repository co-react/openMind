import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 32.7rem;
  padding: 2.4rem;
  flex-direction: column;
  border-radius: 2.4rem;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(140, 140, 140, 0.25);
  gap: 10px;
  &:focus {
    border-color: var(--Brown-40, #542f1a);
  }

  @media (min-width: 768px) {
    width: 61.2rem;
    padding: 3.2rem;
  }
`;

export default Form;
