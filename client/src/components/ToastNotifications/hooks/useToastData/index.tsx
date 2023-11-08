import type { messageType } from "../../index";

import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillWarning,
  AiFillInfoCircle,
} from "react-icons/ai";

export const useToastData = (type: messageType) => {
  switch (type) {
    case "success":
      return {
        backgroundColor: "#0FBD34",
        defaultMessage: "Success: This is a success toast.",
        IconComponent: AiFillCheckCircle,
      };
    case "error":
      return {
        backgroundColor: "#E24C50",
        defaultMessage: "Error: This is an error toast.",
        IconComponent: AiFillCloseCircle,
      };
    case "warning":
      return {
        backgroundColor: "#E6BF0A",
        defaultMessage: "Warning: This is a warning toast.",
        IconComponent: AiFillWarning,
      };
    case "info":
      return {
        backgroundColor: "#3698DB",
        defaultMessage: "Info: This is an information toast.",
        IconComponent: AiFillInfoCircle,
      };
    default:
      return {
        backgroundColor: "",
        defaultMessage: "",
        IconComponent: null,
      };
  }
};
