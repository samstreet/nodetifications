import * as express from 'express';
import Controller from '../../../Core/Http/Controllers/Controller.Interface';
import NotificationService from '../../Services/Notification.Service';
import NotifiablesService from '../../../Notifiables/Services/Notifiables.Service';
import Notification from "../../Types/Notification";
import NotificationFactory from "../../Factories/Notification.Factory";

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

            this.notifiableService.findNotifiable(request.body['sfid'], (err, notifiable) => {
                console.log(notifiable);
                if(err !== null) {
                    return response.status(404).send();
                }

                let c = (new NotificationFactory).instance(request.body.notification, notifiable);
                this.notificationService.send(c);
                return response.status(201).send();
            });

            return response.status(201).send();
        });
    }
}

export default NotificationController;