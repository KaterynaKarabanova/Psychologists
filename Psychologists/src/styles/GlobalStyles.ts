import { createGlobalStyle } from "styled-components";
import fontRegular from "../../public/fonts/static/Inter-Regular.ttf";
import fontSemiBold from "../../public/fonts/static/Inter-SemiBold.ttf";
import fontBold from "../../public/fonts/static/Inter-Bold.ttf";
export const GlobalStyles = createGlobalStyle` @font-face {
  font-family: "Inter";
  font-weight: 400 600 700;
  src: url(${fontRegular}), url(${fontSemiBold}), url(${fontBold});
}
body {
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
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
