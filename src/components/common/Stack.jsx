import styled from "styled-components";

function Stack({ className, gap, children }) {
  return (
    <StyledStack className={className} gap={gap}>
      {children}
    </StyledStack>
  );
}
export default Stack;

const StyledStack = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.gap * 0.1}rem;
`;
