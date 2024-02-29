import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}

button {
  border: none;
}

a {
  text-decoration: none;
}

@font-face {
  font-family: "Pretendard";
  font-weight: 400;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.ttf")
      format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Pretendard";
  font-weight: 600;
  font-style: normal;
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot");
  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff2")
      format("woff2"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.woff")
      format("woff"),
    url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-SemiBold.ttf")
      format("truetype");
  font-display: swap;
}

:root {
  font-size: 62.5%;
  font-family: Pretendard;
  font-style: normal;

  --Grayscale-10: #ffffff;
  --Grayscale-20: #f9f9f9;
  --Grayscale-30: #cfcfcf;
  --Grayscale-40: #818181;
  --Grayscale-50: #515151;
  --Grayscale-60: #000;
  --Brown-10: #f5f1ee;
  --Brown-20: #e4d5c9;
  --Brown-30: #c7bbb5;
  --Brown-40: #542f1a;
  --Brown-50: #341909;
  --Blue-50: #1877f2;
  --Yellow-50: #fee500;
  --Red-50: #b93333;
}




`;

export default GlobalStyles;
