import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  color: {
    body: "rgb(0,0,0)",
    primaryText: "#ffffff",
    secondaryText: "rgba(206, 206, 206, 0.719)",
    primaryAccent: "#2fdd92",
    primaryAccentLight: "#31b37a",
    secondaryAccent: "rgba(48, 250, 223, 0.233)",
    secondaryAccentLight: "rgba(147, 245, 232, 0.568)",
  },
};

export const lightTheme = {
  color: {
    body: "rgb(0,0,0)",
    primaryText: "#ffffff",
    secondaryText: "rgba(206, 206, 206, 0.719)",
    primaryAccent: "#2fdd92",
    primaryAccentLight: "#31b37a",
    secondaryAccent: "rgba(48, 250, 223, 0.233)",
    secondaryAccentLight: "rgba(147, 245, 232, 0.568)",
  },
};

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
}

body{
background-color: ${({ theme }) => theme.color.body};
color: ${({ theme }) => theme.color.primaryText};
transition: all 0.30s linear;

}
`;

export default GlobalStyles;
