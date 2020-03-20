import Channel from "./Channel";
import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import Notification from '../Types/Notification';
import axios from 'axios';

export default class PushChannel extends Channel {
    
    send(notifiable: Notifiable, notification: Notification): void {
        let tokens = notifiable.channels['push'];
        tokens.forEach((token) => {
            const options = {
                headers: {
                    'X-API-Key': token,
                    'Content-Type': 'application/json'
                }
            };

            axios.post('https://push.techulus.com/api/v1/notify', { title: notification.content[this.channelType()].title, body: notification.content[this.channelType()].title }, options)
                .then((response) => {

                })
                .catch((e) => {
                    console.log(e);
                });
        });
    } 
    
    channelType(): string {
        return 'push';
    }
}