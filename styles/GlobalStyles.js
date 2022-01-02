import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  color: {
    body: "#0D0E1D",
    darkCardBgColor: "rgba(0, 0, 0, 0.6)",
    primaryText: "#ffffff",
    secondaryText: "rgba(206, 206, 206, 0.719)",
    primaryAccent: "#FF2D62",
    primaryAccentLight: "#31b37a",
    secondaryAccent: "rgba(48, 250, 223, 0.233)",
    secondaryAccentLight: "rgba(147, 245, 232, 0.568)",
    darkGray: "#282828",
  },
  layout: {
    medium: { media: "768px" },
    large: { media: "1200px" },
  },
};

export const lightTheme = {
  color: {
    body: "#0D0E1D",
    darkCardBgColor: "rgba(0, 0, 0, 0.6)",
    primaryText: "#ffffff",
    secondaryText: "rgba(206, 206, 206, 0.719)",
    primaryAccent: "#FF2D62",
    primaryAccentLight: "#31b37a",
    secondaryAccent: "rgba(48, 250, 223, 0.233)",
    secondaryAccentLight: "rgba(147, 245, 232, 0.568)",
    darkGray: "#282828",
  },
  layout: {
    medium: { media: "768px" },
    large: { media: "1200px" },
  },
};

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
}

.noSelect {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.noSelect:focus {
    outline: none !important;
}

background-color: ${({ theme }) => theme.color.darkCardBgColor};

img{
  max-width: 100%;
}

body{
background-color: ${({ theme }) => theme.color.body};
color: ${({ theme }) => theme.color.primaryText};
transition: all 0.30s linear;
font-family: "Causten";

}
`;

export default GlobalStyles;
