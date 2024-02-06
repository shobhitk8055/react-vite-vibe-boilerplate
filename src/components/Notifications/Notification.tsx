import { AttentionBox } from "@/vibe/components";
import "./notification.css";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ThumbsUp } from "@/vibe/components/Icon/Icons";
import { useNotificationStore } from "@/stores/notifications";

const icons = {
  success: <i className="fa-regular fa-circle-check text-success"></i>,
  info: <i className="fa-solid fa-circle-info text-blue"></i>,
  warning: <i className="fa-solid fa-circle-exclamation text-warning"></i>,
  error: <i className="fa-regular fa-circle-xmark text-danger"></i>,
};

export type NotificationProps = {
  notification: {
    id: string;
    type: keyof typeof icons;
    title: string;
    message?: string;
    show: boolean;
  };
};

export const NotType = {
  success: AttentionBox.types.SUCCESS,
  error: AttentionBox.types.DANGER,
  info: undefined,
  warning: AttentionBox.types.WARNING,
};

export const NotIcon = {
  success: ThumbsUp,
  error: undefined,
  info: Info,
  warning: undefined,
};

export const Notification = ({
  notification: { id, type, title, message },
}: NotificationProps) => {
  const { dismissNotification } = useNotificationStore();

  const onDismis = () => {
    dismissNotification(id);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        exit={{ x: 500 }}
        transition={{ type: "spring", damping: 10, stiffness: 70 }}
        className="shadow-lg rounded-lg w-25"
        role="alert"
        onClick={onDismis}
      >
        <AttentionBox
          title={title}
          text={message}
          type={NotType[type]}
          className="monday-storybook-attention-box_box w-100"
          icon={NotIcon[type]}
          onClose={onDismis}
        />
      </motion.div>
    </AnimatePresence>
  );
};
