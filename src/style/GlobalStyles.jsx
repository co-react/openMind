import { createGlobalStyle, css } from "styled-components";

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

const GlobalStyles = createGlobalStyle`
${reset}

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

* {
  box-sizing: border-box;
}


`;

export default GlobalStyles;
