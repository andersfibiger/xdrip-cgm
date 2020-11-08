import { model, Schema } from 'mongoose';

const entrySchema = new Schema({
  device: { type: String, required: false },
  date: { type: Number, required: false },
  dateString: { type: String, required: false },
  sgv: { type: Number, required: false },
  delta: { type: Number, required: false },
  direction: { type: String, required: false },
  type: { type: String, required: false },
  filtered: { type: Number, required: false },
  unfiltered: { type: Number, required: false },
  rssi: { type: Number, required: false },
  noise: { type: Number, required: false },
  sysTime: { type: Number, required: false }
});


export default model('entry', entrySchema);