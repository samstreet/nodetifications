import * as express from 'express';
import Controller from '../../../Core/Http/Controllers/Controller.Interface';
import NotifiableEntity from '../../Storage/Entity/Notifiable.Entity';
import NotifiableChannelsService from '../../Services/Notifiables.Channels.Service';
import * as mongoose from 'mongoose';

class NotifiableChannelsController implements Controller {
    path = '/notifiables/:notifiableId/channels';
    router = express.Router();
    model: mongoose.model;
    channelService: NotifiableChannelsService;

    constructor(channelService: NotifiableChannelsService) {
        this.initializeRoutes();
        this.model = NotifiableEntity;
        this.channelService = channelService;
    }
    
    private initializeRoutes() {
        this.router.get(this.path, (request: express.Request, response: express.Response) => {
            this.channelService.getChannelsForNotifiable(parseInt(request.params.notifiableId), (err, data) => {
                if(err) {
                    return response.status(404).send(null);
                }

                return response.json({channels: data});
            });
        });

        this.router.post(this.path, (request: express.Request, response: express.Response) => {
            let notifiableId = parseInt(request.params.notifiableId);
            this.channelService.createChannelForNotifiable(notifiableId, {}, (err, data) => {
                return response.json({});
            });
        });

        this.router.put(this.path, (request: express.Request, response: express.Response) => {console.log('PUT'), response.send({"data": "PUT"})});
    }
}

export default NotifiableChannelsController;