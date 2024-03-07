import styled from "styled-components";
import Button from "./Button";
import { BoxShadow1 } from "../../style/commonStyles";

function FloatingButton({ children, ...rest }) {
  return (
    <StyledButton variant="fill" {...rest}>
      {children}
    </StyledButton>
  );
}

export default FloatingButton;

// styled
const StyledButton = styled(Button)`
  ${BoxShadow1}
  border-radius: 20rem;
`;
