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
      expect(created).to.deep.equal(carMock);
    });
  });

  describe('CarModel.read', () => {
    describe('When', () => {
      before(() => {
        modelStub = sinon.stub(moongose.Model, 'find')
          .resolves([carMock]);
      });
  
      after(() => {
        modelStub.restore();
      });
  
      it('Cars are registered in DB', async () => {
        const model = new CarModel();
        const cars = await model.read();
        expect(cars).to.deep.equal([carMock]);
      });
    });

    describe('When', () => {
      before(() => {
        modelStub = sinon.stub(moongose.Model, 'find')
          .resolves([]);
      });
  
      after(() => {
        modelStub.restore();
      });
  
      it('No cars registered in DB', async () => {
        const model = new CarModel();
        const cars = await model.read();
        expect(cars).to.deep.equal([]);
      });
    });
  });
});
