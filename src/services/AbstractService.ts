import { ZodError } from 'zod';
import { Model } from '../interfaces/ModelInterface';

interface ServiceError {
  error: ZodError;
}

export default class Service<T> {
  constructor(private model: Model<T>) {}

  public async create(data: T): Promise<T | ServiceError> {
    const created = await this.model.create(data);
    return created;
  }

  public async read(): Promise<T[] | ServiceError> {
    const results = await this.model.read();
    return results;
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    const result = await this.model.readOne(id);
    return result;
  }

  public async update(id: string, data: T): Promise<T | null | ServiceError> {
    const updated = await this.model.update(id, data);
    return updated;
  }

  public async delete(id: string): Promise<T | null | ServiceError> {
    const deleted = await this.model.delete(id);
    return deleted;
  }
}
