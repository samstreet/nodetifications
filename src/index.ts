import Application from './app/Application';
import NotificationController from './app/Notifications/Http/Controllers/NotifactionController';
import NotificationService from './app/Notifications/Services/Notification.Service';
import NotifiablesController from './app/Notifiables/Http/Controllers/NotifiablesController';
import NotifiablesChannelsController from './app/Notifiables/Http/Controllers/NotifiablesChannelsController';
import NotifiablesChannelsService from './app/Notifiables/Services/Notifiables.Channels.Service';
import NotifiablesService from './app/Notifiables/Services/Notifiables.Service';

const app = new Application([
    new NotificationController(new NotificationService, new NotifiablesService),
    new NotifiablesChannelsController(new NotifiablesChannelsService()),
    new NotifiablesController()
], 3000);
 
app.listen();