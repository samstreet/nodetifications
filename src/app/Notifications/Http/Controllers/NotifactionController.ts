import * as express from 'express';
import Controller from '../../../Core/Http/Controllers/Controller.Interface';
import NotificationService from '../../Services/Notification.Service';

class NotificationController implements Controller {
    path = '/notifications';
    router = express.Router();

    protected notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.initializeRoutes();
        this.notificationService = notificationService;
    }
    
    private initializeRoutes() {
        this.router.get(this.path, (request: express.Request, response: express.Response) => {console.log('GET'); response.send({"data": "GET"})});
        this.router.post(this.path, (request: express.Request, response: express.Response) => {console.log('POST'); this.notificationService.test(JSON.stringify(request.body)); response.send({"data": "POST"})});
        this.router.put(this.path, (request: express.Request, response: express.Response) => {console.log('PUT'), response.send({"data": "PUT"})});
        this.router.patch(this.path, (request: express.Request, response: express.Response) => {console.log('PATCH'), response.send({"data": "PATCH"})});
    }
}

export default NotificationController;