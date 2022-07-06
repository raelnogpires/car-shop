import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongooseModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (data: T): Promise<T> => {
    const created = await this.model.create(data);
    return created;
  };

  read = async (): Promise<T[]> => {
    const found = await this.model.find();
    return found;
  };

  readOne = async (id: string): Promise<T | null> => {
    const found = await this.model.findById(id);
    return found;
  };

  update = async (id: string, data: T): Promise<T | null> => {
    const updated = await this.model
      .findByIdAndUpdate(id, { data }, { new: true });
    return updated;
  };

  delete = async (id: string): Promise<T | null> => {
    const deleted = await this.model.findByIdAndDelete(id);
    return deleted;
  };
}

export default MongooseModel;
