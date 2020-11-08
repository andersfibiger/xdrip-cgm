import entryDataModel from '../database/entryDataModel';
import { Entry } from '../models/entry';

export interface IEntryService {
  create(entry: Entry): Promise<boolean>;
}

export class EntryService implements IEntryService {
  public async create(entry: Entry): Promise<boolean> {
    var model = new entryDataModel({
      date: entry.date,
      dateString: entry.dateString,
      sgv: entry.sgv,
    });

    await model.save();
    return true;
  }

}