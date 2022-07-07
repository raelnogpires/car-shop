import { expect } from 'chai'
import CarService from '../../../services/CarService';
import { carMock } from '../../mocks/car.mock';
import CarModelMock from '../../mocks/carModel.mock';

describe('02 - Tests CarService', () => {
  const modelMock = new CarModelMock();

  describe('CarService.create', () => {});
  it('Success', async () => {
    // @ts-ignore
    const service = new CarService(modelMock);
    const created = await service.create(carMock);
    expect(created).to.deep.equal(carMock);
  });
});
