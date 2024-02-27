import styled from 'styled-components';

const FloatingButton = () => {
  return (
    <Button>
      <Text>질문 작성하기</Text>
    </Button>
  )
}

export default FloatingButton

// styled
const Button = styled.button`
  display: flex;
  box-sizing: border-box;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 200px;
  background: var(--Brown-40, #542F1A);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Text = styled.span`
  color: var(--Grayscale-10, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 125% */
`