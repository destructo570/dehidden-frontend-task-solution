import React, { useEffect, useState } from "react";

type NotificationContextObj = {
  notification: string | undefined;
  showNotification: (data: string) => void;
  hideNotification: () => void;
};

const NotificationContext = React.createContext<NotificationContextObj>({
  notification: "",
  showNotification: () => {},
  hideNotification: () => {},
});

export const NotificationProvider: React.FC = (props) => {
  const [activeNotification, setActiveNotification] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (activeNotification) {
      const timer = setTimeout(() => {
        setActiveNotification(undefined);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (data: string) => {
    setActiveNotification(data);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(undefined);
  };

  const contextValue: NotificationContextObj = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={contextValue}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
