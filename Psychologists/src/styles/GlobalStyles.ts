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
  --hover-orange:rgb(255 169 108);
  --border-gray:rgba(25, 26, 21, 0.2);
  --transparent-gray:rgba(25, 26, 21, 0.10);
  --transition: 0.2s ease-in;
}
body {
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  font-size: 16px;
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

export const Container = styled.div`
  box-sizing: border-box;
  display: block;
  width: 1440px;
  padding: 0 128px;
`;
