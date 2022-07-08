import { z } from 'zod';

import { Car, car } from '../interfaces/CarInterface';
import Service, { ServiceError } from './AbstractService';
import CarModel from '../models/CarModel';

const idValidation = z.string().length(
  24,
  { message: 'Id must have 24 hexadecimal characters' },
);

export default class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  public async create(data: Car): Promise<Car | ServiceError> {
    const parsed = car.safeParse(data);
    if (!parsed.success) {
      return { error: parsed.error };
    }

    const created = await this.model.create(data);
    return created;
  }

  public async read(): Promise<Car[] | ServiceError> {
    const results = await this.model.read();
    return results;
  }

  public async readOne(id: string): Promise<Car | null | ServiceError> {
    const isIdValid = idValidation.safeParse(id);
    if (!isIdValid.success) {
      return { error: isIdValid.error };
    }

    const result = await this.model.readOne(id);
    if (!result) return null;

    return result;
  }

  public async update(
    id: string,
    data: Car,
  ): Promise<Car | null | ServiceError> {
    const parsed = car.safeParse(data);
    if (!parsed.success) {
      return { error: parsed.error };
    }

    const isIdValid = idValidation.safeParse(id);
    if (!isIdValid.success) {
      return { error: isIdValid.error };
    }

    const updated = await this.model.update(id, data);
    if (!updated) return null;

    return updated;
  }

  public async delete(id: string): Promise<Car | null | ServiceError> {
    const isIdValid = idValidation.safeParse(id);
    if (!isIdValid.success) {
      return { error: isIdValid.error };
    }

    const deleted = await this.model.delete(id);
    if (!deleted) return null;

    return deleted;
  }
}
