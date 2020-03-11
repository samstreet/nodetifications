import Notification from './Notification';
import { NotificationViaEmail, NotificationViaPush } from './Notification.Interface';
import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import EmailChannel from '../Channels/Email.Channel';
import PushChannel from '../Channels/Push.Channel';

export default class HelloNotification extends Notification implements NotificationViaEmail, NotificationViaPush {
    public via = ['push', 'email'];
    content = {
        push : {
            "title": "Hello Notification",
            "body": "Hello Body Notification"
        }
    };

    constructor(public notifiable: Notifiable) {
        super(notifiable);
    }

    viaEmail(): boolean {
        this.content["email"] = this.getEmailContent();

        let channel = new EmailChannel();
        channel.send(this.notifiable, this);
        
        return true;
    }

    viaPush(): boolean {
        let channel = new PushChannel();
        channel.send(this.notifiable, this);
        
        return true;
    }

    private getEmailContent(): string {
        let body = Math.random().toString();
        return '<html>' +
            '<body>' +
            '<h1>Title</h1>' +
            '<p>'+body+'</p>' +
            '</body>' +
            '</html>';
    }
}