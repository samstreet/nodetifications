import LogEntity from '../../Core/Storage/Entity/Log.Entity';

class NotificationService {
    public test(content: string) {
        const createdLog = new LogEntity({raised: new Date, content: content});
        createdLog.save()
        .then((savedLog) => {
            return savedLog;        
        });
    }
}

export default NotificationService;