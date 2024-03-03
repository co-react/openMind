import React from "react";
import { css, styled } from "styled-components";

export const ThemeModeButton = ({ toggleTheme, themeMode }) => {
  return (
    <ThemeModeWrapper onClick={toggleTheme}>
      {themeMode === "lightTheme" ? "🌝" : "🌚"}
    </ThemeModeWrapper>
  );
};

const ThemeModeWrapper = styled.button`
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
