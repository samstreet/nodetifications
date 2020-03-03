import * as mongoose from 'mongoose';
import Log from './Log.Interface';

const logSchema = new mongoose.Schema({
    raised: Date,
    content: String
  });
   
  const LogEntity = mongoose.model<Log & mongoose.Document>('Log', logSchema);
   
  export default LogEntity;