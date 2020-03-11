import Channel from "./Channel";
import { Notifiable } from '../../Notifiables/Storage/Entity/Notifiable.Interface';
import Notification from '../Types/Notification';
import * as nodemailer from 'nodemailer';

export default class MailChannel extends Channel {
    send(notifiable: Notifiable, notification: Notification): void {
        let transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "0e419abc5c17ac",
                pass: "dc167c5b516940"
            }
        });

        let mailOptions = {
            from : 'from_test@gmail.com',
            to : 'to_test@gmail.com',
            subject : 'Hello',
            html: notification.content["email"]
        };

        transporter.sendMail( mailOptions, (error, info) => {
            if (error) {
                return console.log(`error: ${error}`);
            }
            console.log(`Message Sent ${info.response}`);
        });
    }    
    
    channelType(): string {
        return 'email';
    }
}