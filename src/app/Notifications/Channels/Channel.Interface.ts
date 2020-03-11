import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import Notification from '../Types/Notification'; 

export default interface ChannelInterface {
    send(notifiable: Notifiable, notification: Notification): void;
    channelType(): string;
}