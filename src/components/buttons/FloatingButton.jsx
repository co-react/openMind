import styled from 'styled-components';

function FloatingButton({children, onClick}) {
  return (
    <Button onClick={onClick}>
      <Text>
      {children}
      </Text>
    </Button>
  )
}

export default FloatingButton

// styled
const Button = styled.button`
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  padding: 1.2rem 2.4rem;
  flex-shrink: 0;

  border-radius: 20.0rem;
  background: var(--Brown-40, #542F1A);
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
`;

const Text = styled.span`
  color: var(--Grayscale-10, #FFF);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Pretendard;
  font-size: 2.0rem;
  font-style: normal;
  font-weight: 400;
`