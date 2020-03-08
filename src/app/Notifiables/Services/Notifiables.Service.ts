import * as mongoose from 'mongoose';
import NotifiableEntity from '../Storage/Entity/Notifiable.Entity';

export default class NotifiablesService {
    model: mongoose.model;

    constructor() {
        this.model = NotifiableEntity;
    }

    findNotifiable(sfId: number, callback: Function)
    {
        this.model.findOne({sfid: sfId})
        .then((notifiable) => {
            return callback(null, notifiable);
        }).catch((e) => {
            return callback(e, null);
        });
    }
}