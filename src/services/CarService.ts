import { Car, car } from '../interfaces/CarInterface';
import Service, { ServiceError } from './AbstractService';
import CarModel from '../models/CarModel';

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
    const result = await this.model.readOne(id);
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

    const updated = await this.model.update(id, data);
    return updated;
  }

  public async delete(id: string): Promise<Car | null | ServiceError> {
    const deleted = await this.model.delete(id);
    return deleted;
  }
}
