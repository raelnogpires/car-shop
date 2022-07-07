import { Car } from '../../interfaces/CarInterface';
import { Model } from '../../interfaces/ModelInterface';
import { carMock } from './car.mock';

class CarModelMock implements Model<Car> {
  create = async (data: Car): Promise<Car> => data;

  read = async (): Promise<Car[]> => [carMock];

  readOne = async (id: string): Promise<Car | null> => carMock;

  update = async (id: string, data: Car): Promise<Car | null> => data;

  delete = async (id: string): Promise<Car | null> => carMock;
}