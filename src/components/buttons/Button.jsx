import styled from "styled-components";

function BaseButton({ color, children }) {
  return <Button color={color}>{children}</Button>;
}

export default BaseButton;

// styled
const Button = styled.button`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: ${props => (props.color === "brown" ? "#fff" : "var(--Brown-40)")};
  font-size: 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 0 0.1rem var(--Brown-40);
  background: ${props => (props.color === "brown" ? "var(--Brown-40)" : "var(--Brown-10)")};
  box-sizing: border-box;
  border: none;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 0.2rem ${props => (props.color === "brown" ? "var(--Brown-50)" : "var(--Brown-40)")};
    background-color: ${props => (props.color === "brown" ? "var(--Brown-50)" : "var(--Brown-20)")};
  }

  &:hover {
    box-shadow: 0 0 0 0.2rem var(--Brown-50);
  }
`;
