import NotifiableEntity from '../Storage/Entity/Notifiable.Entity';
import * as mongoose from 'mongoose';

export default class NotifiablesChannelsService {

    model: mongoose.model;

    constructor() {
        this.model = NotifiableEntity;
    }

    public getChannelsForNotifiable(notifiableId: number, callback: Function) {
        this.model.findOne({sfid: notifiableId})
        .then((notifiable) => {
            return callback(null, Object.keys(notifiable.channels));
        }).catch((e) => {
            return callback(e, null);
        });
    }

    public createChannelForNotifiable(notifiableId: number, channel: object, callback: Function) {
        callback(null, {});
    }

    public updateChannelForNotifiable(notifiableId: number, channel: string, data: string[], callback: Function) {

    }
}