import { ToastNotifications } from "../components";
import "../styles/global.scss";

export const App = () => {
  return (
    <div className="wrapper">
      <ToastNotifications type="success" />
      <ToastNotifications type="success" />
      <ToastNotifications type="success" />
    </div>
  );
};
