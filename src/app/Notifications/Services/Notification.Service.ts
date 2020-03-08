import NotifiableEntity from '../../Notifiables/Storage/Entity/Notifiable.Entity';
import Notification from '../Types/Notification';

class NotificationService {
    public test(content: string) {
        const notifiable = new NotifiableEntity({sfid: 1, email: "samstreet.dev@gmail.com", mobile: "07541625594"});
        notifiable.save()
        .then((savedLog) => {
            return savedLog;        
        });
    }

    public send(notification: Notification): boolean {
        notification.dispatch();
        return true;
    }
}

export default NotificationService;