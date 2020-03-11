import * as express from 'express';
import Controller from '../../../Core/Http/Controllers/Controller.Interface';
import NotificationService from '../../Services/Notification.Service';
import TestNotification from '../../Types/Test.Notification';
import HelloNotification from '../../Types/Hello.Notification';
import NotifiablesService from '../../../Notifiables/Services/Notifiables.Service';

class NotificationController implements Controller {
    path = '/notifications';
    router = express.Router();

    protected notificationService: NotificationService;
    protected notifiableService: NotifiablesService;

    constructor(notificationService: NotificationService, notifiableService: NotifiablesService) {
        this.initializeRoutes();
        this.notificationService = notificationService;
        this.notifiableService = notifiableService;
    }
    
    private initializeRoutes() {
        this.router.post(this.path, (request: express.Request, response: express.Response) => {
            this.notifiableService.findNotifiable(1, (err, notifiable) => {
                if(err !== null) {
                    return response.status(404).send();
                }
                
                this.notificationService.send(new TestNotification(notifiable));
                this.notificationService.send(new HelloNotification(notifiable));
                response.status(201).send();
            });
        });
    }
}

export default NotificationController;