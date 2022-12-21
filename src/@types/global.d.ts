declare interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

declare interface SendNotificationsRequest {
  recipientId: string;
  content: string;
  category: string;
}

declare interface SendNotificationResponse {
  notification: Notification;
}
