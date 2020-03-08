import * as express from 'express';
import Controller from '../../../Core/Http/Controllers/Controller.Interface';
import NotificationService from '../../Services/Notification.Service';
import TestNotification from '../../Types/Test.Notification';
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
        this.router.get(this.path, (request: express.Request, response: express.Response) => {console.log('GET'); response.send({"data": "GET"})});
        this.router.post(this.path, (request: express.Request, response: express.Response) => {
            console.log('POST');

            this.notifiableService.findNotifiable(1, (err, notifiable) => {
                if(err) {
                    console.log(err);
                    return response.status(404).send();
                }
    
                this.notificationService.send(new TestNotification(notifiable));
                response.send({"data": "POST"})
            });
        });
        this.router.put(this.path, (request: express.Request, response: express.Response) => {console.log('PUT'), response.send({"data": "PUT"})});
        this.router.patch(this.path, (request: express.Request, response: express.Response) => {console.log('PATCH'), response.send({"data": "PATCH"})});
    }
}

export default NotificationController;