import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';
import Controller from './Core/Http/Controllers/Controller.Interface';
 
class Application {
  public app: express.Application;
  public port: number;

  private supportedTypes = ['Hello', 'Test'];
 
  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeDatabaseConnection();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initialiseHandlebars();
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use('/notifications', (request: express.Request, response: express.Response, next) => {
        if(this.supportedTypes.includes(request.body.notification)) {
            next();
        }

        response.status(400).send();
    });
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeDatabaseConnection() {
    mongoose.connect(`mongodb://0.0.0.0:27017/notifications`, { useUnifiedTopology: true, useNewUrlParser: true });
  }

  private initialiseHandlebars() {
    let source = fs.readFileSync(path.join(__dirname, '/Notifications/Templates/header.partial.hbs'), 'utf8');
    let template = handlebars.compile(source);
    handlebars.registerPartial("header", template);

    source = fs.readFileSync(path.join(__dirname, '/Notifications/Templates/footer.partial.hbs'), 'utf8');
    template = handlebars.compile(source);
    handlebars.registerPartial("footer", template);
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
 
export default Application;