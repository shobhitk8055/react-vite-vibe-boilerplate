import { AttentionBox } from "@/vibe/components";
import "./notification.css";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp } from "@/vibe/components/Icon/Icons";

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
    show: boolean;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({
  notification: { id, type, title, message },
  onDismiss,
}: NotificationProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        exit={{ x: 500 }}
        transition={{ type: "spring", damping: 10, stiffness: 70 }}
        className="shadow-lg rounded-lg w-35"
        role="alert"
        onClick={() => onDismiss(id)}
      >
        <AttentionBox
          title="You're doing great"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          type={AttentionBox.types.SUCCESS}
          className="monday-storybook-attention-box_box"
          icon={ThumbsUp}
        />
      </motion.div>
    </AnimatePresence>
  );
};
