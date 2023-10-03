import "./notification.css";
import { motion, AnimatePresence } from "framer-motion";

const icons = {
  info: <i className="fa-solid fa-circle-info text-blue"></i>,
  success: <i className="fa-regular fa-circle-check text-success"></i>,
  warning: <i className="fa-solid fa-circle-exclamation text-warning"></i>,
  error: <i className="fa-regular fa-circle-xmark text-danger"></i>,
};

export type NotificationProps = {
  notification: {
    id: string;
    type: keyof typeof icons;
    title: string;
    message?: string;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({
  notification: { type, title, message },
}: NotificationProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        className="d-flex justify-content-end my-3"
      >
        <div className="w-35 flex flex-col items-center space-y-4 sm:items-end remove-notification position-absolute">
          <div className="alert alert-light shadow-lg rounded-lg" role="alert">
            <h6 className="alert-heading not-icon">
              {icons[type]} <span className="ps-2"> {title}</span>
            </h6>
            <p className="not-msg">{message}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
