import styled, { createGlobalStyle } from "styled-components";
import fontRegular from "../../public/fonts/static/Inter-Regular.ttf";
import fontSemiBold from "../../public/fonts/static/Inter-SemiBold.ttf";
import fontBold from "../../public/fonts/static/Inter-Bold.ttf";
import fontMedium from "../../public/fonts/static/Inter-Medium.ttf";
export const GlobalStyles = createGlobalStyle` 
@font-face {
  font-family: "Inter";
  font-weight: 400;
  src: url(${fontRegular}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 500;
  src: url(${fontMedium}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 600;
  src: url(${fontSemiBold}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 700;
  src: url(${fontBold}) format('truetype');
}
:root{
  --primary-orange: rgba(252, 131, 44, 1);
  --primary-black:#191A15;
  --primary-white:rgba(251, 251, 251, 1);
  --transparent-white:rgba(251, 251, 251, 0.5);
  --hover-orange:rgba(252, 131, 44, 0.2);
  --light-gray:#F3F3F3;
  --border-gray:rgba(25, 26, 21, 0.2);
  --transparent-gray:rgba(25, 26, 21, 0.10);
  --text-gray:rgba(138, 138, 137, 1);
  --transparent-black:rgba(25, 26, 21, 0.60);
  --primary-yellow:rgba(251, 199, 94, 1);
  --primary-green:#54BE96;
  --light-green:#38CD3E;
  --transition: 0.2s ease-in;
}
body {
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: var(--primary-black);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: block;
  width: 1440px;
  padding: 0 128px;
`;
