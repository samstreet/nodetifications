import Notification from './Notification';
import { NotificationViaEmail, NotificationViaSms } from './Notification.Interface';
import Notifiable from '../../Notifiables/Storage/Entity/Notifiable.Interface';

export default class TestNotification extends Notification implements NotificationViaEmail, NotificationViaSms {
    public via = ['email', 'sms'];

    constructor(public notifiable: Notifiable) {
        super(notifiable);
    }

    viaEmail(): boolean {
        console.log('via email');
        return true;
    }

    viaSms(): boolean {
        console.log("via sms");
        return true;
    }
}