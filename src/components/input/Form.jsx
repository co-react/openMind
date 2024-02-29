import styled from "styled-components";

const Form = styled.form`
  ${BoxShadow1}
  display: flex;
  width: 32.7rem;
  padding: 2.4rem;
  flex-direction: column;
  border-radius: 2.4rem;
  background: var(--Grayscale-10, #fff);
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
