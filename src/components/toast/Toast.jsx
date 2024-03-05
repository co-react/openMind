import styled from "styled-components";

function Toast() {
  return (
    <StyledToast>
      <Text>URL이 복사되었습니다</Text>
    </StyledToast>
  )
}

export default Toast

const StyledToast = styled.div`
  display: inline-flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: var(--Grayscale-60, #000);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const Text = styled.span`
  color: var(--Grayscale-10, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 129%;
`