import "./styles.scss";

import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillWarning,
  AiFillInfoCircle,
  AiOutlineClose
} from "react-icons/ai";

type messageType = "success" | "error" | "warning" | "info";

interface ToastNotificationsProps {
  type: messageType;
  description?: string;
}

export const ToastNotifications = ({
  type,
  description,
}: ToastNotificationsProps) => {
  let IconComponent: React.ElementType | null = null;
  let backgroundColor = "";
  let defaultMessage = "";

  if (type === "success") {
    IconComponent = AiFillCheckCircle;
    backgroundColor = "#0FBD34";
    defaultMessage = "Success: This is a success toast."
  } else if (type === "error") {
    IconComponent = AiFillCloseCircle;
    backgroundColor = "#E24C50";
    defaultMessage = "Error: This is an error toast."
  } else if (type === "warning") {
    IconComponent = AiFillWarning;
    defaultMessage = "Warning: This is a warning toast."
    backgroundColor = "#E6BF0A";
  } else if (type === "info") {
    IconComponent = AiFillInfoCircle;
    backgroundColor = "#3698DB";
    defaultMessage = "Info: This is an information toast."
  }

  

  return (
    <div className="notificationDiv">
      <div className="notification">
        <div className="iconClass" style={{ color: backgroundColor }}>{IconComponent && <IconComponent />}</div>
        <span>{description ? description : defaultMessage}</span>
      </div>
      <div className="iconCloseClass"><AiOutlineClose/></div>
    </div>
  );
};
