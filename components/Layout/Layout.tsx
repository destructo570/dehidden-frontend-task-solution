import GlobalStyles from "../../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../styles/GlobalStyles";
import { StyledLayout } from "./styledComponents";
import Notification from "../Global/Notification";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";

export default function Layout({ children }: { children: any }) {
  const notifCtx = useContext(NotificationContext);
  const activeNotification = notifCtx.notification;

  return (
    <>
      <StyledLayout>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          {children}
          {activeNotification && <Notification message={activeNotification} />}
        </ThemeProvider>
      </StyledLayout>
    </>
  );
}
