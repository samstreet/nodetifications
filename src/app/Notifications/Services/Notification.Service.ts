import Notification from '../Types/Notification';

class NotificationService {
    public send(notification: Notification): boolean {
        notification.dispatch();
        return true;
    }
}

export default NotificationService;