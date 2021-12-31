import GlobalStyles from "../../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/GlobalStyles";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
}
