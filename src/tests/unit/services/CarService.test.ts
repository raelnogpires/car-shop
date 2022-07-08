import sinon, { SinonStub } from 'sinon';
import { expect } from 'chai'

import CarService from '../../../services/CarService';

import { carMock } from '../../mocks/car.mock';

describe('02 - Tests CarService', () => {
  let carServiceMock: SinonStub;

  describe('CarService.create', () => {
    before(() => {
      carServiceMock = sinon.stub(CarService.prototype, 'create');
      carServiceMock.onFirstCall().resolves(carMock);
      carServiceMock.onSecondCall().resolves({ error: 'zoderror' });
    });

    after(() => {
      carServiceMock.restore();
    });

    it('Success', async () => {
      const service = new CarService();
      const created = await service.create(carMock);
      expect(created).to.deep.equal(carMock);
    });

    it('Failure', async () => {
      const service = new CarService();
      const created = await service.create(carMock);
      expect(created).to.have.property('error', 'zoderror');
    });
  });
});
