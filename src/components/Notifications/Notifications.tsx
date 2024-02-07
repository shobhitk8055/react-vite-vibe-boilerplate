import { useNotificationStore } from "@/stores/notifications";
import { useEffect } from "react";

import { Notification } from "./Notification";

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();

  useEffect(() => {
    notifications.map((notification) => {
      setTimeout(() => {
        dismissNotification(notification.id);
      }, 4000);
    });
  }, [notifications]);

  return (
    <div className="z-50 d-flex flex-col fixed inset-0 space-y-4 align-items-end pointer-events-none px-4 py-6 sm:p-6 sm:items-start">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
};
