import { Car } from '../../interfaces/CarInterface';
import { Model } from '../../interfaces/ModelInterface';
import { carMock } from './car.mock';

export default class CarModelMock implements Model<Car> {
  create = async (data: Car): Promise<Car> => data;

  read = async (): Promise<Car[]> => [carMock];

  readOne = async (_id: string): Promise<Car | null> => carMock;

  update = async (_id: string, data: Car): Promise<Car | null> => data;

  delete = async (_id: string): Promise<Car | null> => carMock;
}