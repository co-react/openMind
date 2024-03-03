import styled from "styled-components";
import { ReactComponent as NextArrow } from "../../assets/svg/icons/next.svg";
import { BUTTON_STYLE } from "../../style/commonStyles";
import Button from "../buttons/Button";

function ArrowIconButton({
  hasIcon,
  buttonStyle,
  children,
  disabled,
  ...rest
}) {
  return (
    <Button
      disabled={disabled}
      buttonStyle={buttonStyle}
      rightIcon={
        hasIcon && (
          <StyledNextArrow buttonStyle={buttonStyle} disabled={disabled} />
        )
      }
      {...rest}
    >
      {children}
    </Button>
  );
}

export default ArrowIconButton;

const StyledNextArrow = styled(NextArrow)`
  fill: ${(props) =>
    props.disabled
      ? BUTTON_STYLE[props.buttonStyle].disabledColor
      : BUTTON_STYLE[props.buttonStyle].defaultColor};
  width: 18px;
  height: 18px;
`;
