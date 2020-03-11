import * as mongoose from 'mongoose';
import { Notifiable } from './Notifiable.Interface';

const notifiableSchema = new mongoose.Schema({
    sfid: Number,
    channels: Object
});
   
const NotifiableEntity = mongoose.model<Notifiable & mongoose.Document>('Notifiable', notifiableSchema);
   
export default NotifiableEntity;