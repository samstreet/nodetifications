import Application from './app/Application';
import NotificationController from './app/Notifications/Http/Controllers/NotifactionController';
import NotificationService from './app/Notifications/Services/Notification.Service';

const app = new Application([
    new NotificationController(new NotificationService())
], 3000);
 
app.listen();