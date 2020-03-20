import { NotificationChannels } from "./Notification.Interface";
import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import * as fs from "fs";
import * as path from "path";
import * as handlebars from "handlebars";

export default abstract class Notification implements NotificationChannels {
    via: string[];
    public content: object;

    protected constructor(public notifiable: Notifiable) {}

    getChannels(): string[] {
        return this.via
    }

    dispatch() {
        this.via.forEach((via) => {
            if(! Object.keys(this.notifiable.channels).includes(via)) {
                console.log("user does not have channel configured: " + via);
                return;
            }
            
            let fn = "via" + via.charAt(0).toUpperCase() + via.substring(1);
            this[fn].apply(this);
        });
    }

    getEmailContent(file: string): string {
        let source = fs.readFileSync(path.join(__dirname, file), 'utf8');
        let template = handlebars.compile(source);

        return template({});
    }

}