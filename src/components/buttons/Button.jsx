import styled from "styled-components";
import { BUTTON_STYLE } from "../../style/commonStyles";

function Button({ buttonStyle, children, rightIcon, disabled, ...rest }) {
  return (
    <StyledButton
      buttonStyle={buttonStyle}
      rightIcon={rightIcon}
      disabled={disabled}
      {...rest}
    >
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
}

export default Button;

// styled
const StyledButton = styled.button`
  display: flex;
  padding: ${(props) =>
    props.buttonStyle === "outline" ? "0.8rem 1.2rem" : "1.2rem 2.4rem"};
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: ${(props) => BUTTON_STYLE[props.buttonStyle].defaultColor};
  font-size: 1.4rem;
  border-radius: 0.8rem;
  box-shadow: inset 0 0 0 0.1rem var(--Brown-40);
  background-color: ${(props) =>
    BUTTON_STYLE[props.buttonStyle].backgroundColor};
  box-sizing: border-box;
  border: none;
  outline: none;

  &:active {
    box-shadow: inset 0 0 0 0.2rem
      ${(props) => BUTTON_STYLE[props.buttonStyle].activeBoxShadowColor};
    background-color: ${(props) =>
      BUTTON_STYLE[props.buttonStyle].activeBackgroundColor};
  }

  &:hover {
    box-shadow: inset 0 0 0 0.2rem
      ${(props) => BUTTON_STYLE[props.buttonStyle].hover};
  }

  &:disabled {
    color: ${(props) => BUTTON_STYLE[props.buttonStyle].disabledColor};
    background-color: ${(props) =>
      BUTTON_STYLE[props.buttonStyle].disabledBackgroundColor};
    box-shadow: inset 0 0 0 0.1rem
      ${(props) => BUTTON_STYLE[props.buttonStyle].disabledBoxShadow};
  }

  @media (min-width: 768px) {
    padding: 1.2rem 2.4rem;
    gap: 0.8rem;
    font-size: 1.6rem;
  }
`;
