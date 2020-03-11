import Channel from "./Channel";
import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import Notification from '../Types/Notification';

export default class SmsChannel extends Channel {
    send(notifiable: Notifiable, notification: Notification): void {
        return;
    }    
    
    channelType(): string {
        return 'sms';
    }
}