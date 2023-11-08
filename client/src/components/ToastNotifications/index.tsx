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

  const beforeStyle = {
    background: `${backgroundColor}`,
  };

  return (
    <div className="wrapper">
      <div className="notificationDiv">
        <div className="notification">
          <div style={beforeStyle} className="animationDiv"></div>
          <div className="iconClass" style={{ color: backgroundColor }}>
            {IconComponent && <IconComponent />}
          </div>
          <span>{description ? description : defaultMessage}</span>
        </div>
        <div className="iconCloseClass">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};
