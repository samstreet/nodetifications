import Notification from './Notification';
import { NotificationViaEmail, NotificationViaPush } from './Notification.Interface';
import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import EmailChannel from '../Channels/Email.Channel';
import PushChannel from '../Channels/Push.Channel';

export default class TestNotification extends Notification implements NotificationViaEmail, NotificationViaPush {
    public via = ['push'];
    content = {
        "push" : {
            "title": "Test Notification",
            "body": "Test Body Notification"
        }
    };

    constructor(public notifiable: Notifiable) {
        super(notifiable);
    }

    viaEmail(): boolean {

        let channel = new EmailChannel();
        channel.send(this.notifiable, this);
        
        return true;
    }

    viaPush(): boolean {
        let channel = new PushChannel();
        channel.send(this.notifiable, this);
        
        return true;
    }
}