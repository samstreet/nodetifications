import {HelloNotification, TestNotification} from '../Types/Types';
import Notification from "../Types/Notification";

export default class NotificationFactory {

    private dict = new Map([['Hello', HelloNotification], ['Test', TestNotification]]);

    public instance(classname: string, properties: any): Notification|null {
        if (! this.dict.get(classname) ) {
            return null;
        }

        return new (this.dict.get(classname))(properties);
    }
}