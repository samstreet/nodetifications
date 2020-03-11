import ChannelInterface from './Channel.Interface';
import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import Notification from '../Types/Notification';

abstract class Channel implements ChannelInterface {
    
    abstract send(notifiable: Notifiable, notification: Notification): void;
    
    abstract channelType(): string;
    
}

export default Channel;