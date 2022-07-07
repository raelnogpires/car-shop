import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import moongose from 'mongoose';

import CarModel from '../../../models/CarModel';

import { carMock } from '../../mocks/car.mock';

describe('01 - Tests CarModel', () => {
  let modelStub: SinonStub;

  describe('CarModel.create', () => {
    before(() => {
      modelStub = sinon.stub(moongose.Model, 'create')
      .resolves(carMock);
    });

    after(() => {
      modelStub.restore();
    });

    it('Success', async () => {
      const model = new CarModel();
      const created = await model.create(carMock);
      expect(created).to.be.deep.equal(carMock);
    });
  });
});
