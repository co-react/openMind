import { css, styled } from "styled-components";

function ThemeModeButton({ toggleTheme, themeMode }) {
  // export const ThemeModeButton = () => {
  return (
    <StyledThemeModeButton onClick={toggleTheme}>
      {themeMode === "lightTheme" ? "🌝" : "🌚"}
    </StyledThemeModeButton>
  );
}

const StyledThemeModeButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 80px;
  height: 50px;
  margin: 10px;
  border: none;
  border-radius: 10px;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.colors.colorMain};
      box-shadow: ${(props) => props.theme.colors.colorShadow};
      color: ${theme.textColor}; // 예시: theme 변수를 사용한 새로운 코드
    `;
  }}
`;

export default ThemeModeButton;
