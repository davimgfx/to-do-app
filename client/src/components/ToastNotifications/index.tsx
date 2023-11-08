import React, { useState, useEffect } from "react";
import { useToastData } from "./hooks/useToastData";
import "./toastNotifications.styles.scss";
import { AiOutlineClose } from "react-icons/ai";

export type messageType = "success" | "error" | "warning" | "info";

interface ToastNotificationsProps {
  type: messageType;
  description?: string;
}

export const ToastNotifications = ({
  type,
  description,
}: ToastNotificationsProps) => {
  const { backgroundColor, defaultMessage, IconComponent } = useToastData(type);
  const [isHidden, setIsHidden] = useState(false);

  const beforeStyle = {
    background: `${backgroundColor}`,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isHidden) {
      const removeElement = () => {
        const element = document.querySelector(".wrapper.hidden");
        if (element) {
          element.remove();
        }
      };

      const removalTimer = setTimeout(removeElement, 300);

      return () => {
        clearTimeout(removalTimer);
      };
    }
  }, [isHidden]);

  return (
    <div className={`wrapper ${isHidden ? "hidden" : ""}`}>
      <div className="notificationDiv">
        <div className="notification">
          <div style={beforeStyle} className="animationDiv"></div>
          <div className="iconClass" style={{ color: backgroundColor }}>
            {IconComponent && <IconComponent />}
          </div>
          <span>{description ? description : defaultMessage}</span>
        </div>
        <div className="iconCloseClass" onClick={() => setIsHidden(true)}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};
