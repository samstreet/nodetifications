import * as express from 'express';
import Controller from '../../../Core/Http/Controllers/Controller.Interface';

class NotifiablesController implements Controller {
    path = '/notifiables';
    router = express.Router();

    constructor() {
        this.initializeRoutes();
    }
    
    private initializeRoutes() {
        this.router.get(this.path, (request: express.Request, response: express.Response) => {console.log('GET'); response.send({"data": "GET"})});
        this.router.get(this.path, (request: express.Request, response: express.Response) => {console.log('GET'); response.send({"data": "GET"})});
        this.router.post(this.path, (request: express.Request, response: express.Response) => {console.log('POST'); response.send({"data": "POST"})});
        this.router.put(this.path, (request: express.Request, response: express.Response) => {console.log('PUT'), response.send({"data": "PUT"})});
        this.router.patch(this.path, (request: express.Request, response: express.Response) => {console.log('PATCH'), response.send({"data": "PATCH"})});
    }
}

export default NotifiablesController;