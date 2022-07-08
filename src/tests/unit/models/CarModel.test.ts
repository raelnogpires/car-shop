import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import moongose, { models } from 'mongoose';

import CarModel from '../../../models/CarModel';

import { carMock, hexadecimalId } from '../../mocks/car.mock';

describe('01 - Tests CarModel', () => {
  let modelStub: SinonStub;

  describe('a. CarModel.create', () => {
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

  describe('b. CarModel.read', () => {
    describe('When cars are registered in DB', () => {
      before(() => {
        modelStub = sinon.stub(moongose.Model, 'find')
          .resolves([carMock]);
      });
  
      after(() => {
        modelStub.restore();
      });
  
      it('Returns array of cars', async () => {
        const model = new CarModel();
        const cars = await model.read();
        expect(cars).to.deep.equal([carMock]);
      });
    });

    describe('When no cars registered in DB', () => {
      before(() => {
        modelStub = sinon.stub(moongose.Model, 'find')
          .resolves([]);
      });
  
      after(() => {
        modelStub.restore();
      });
  
      it('Returns empty array', async () => {
        const model = new CarModel();
        const cars = await model.read();
        expect(cars).to.deep.equal([]);
      });
    });
  });

  describe('c. CarModel.readOne', () => {
    describe('When car exists', () => {
      before(() => {
        modelStub = sinon.stub(moongose.Model, 'findOne')
          .resolves(carMock);
      });

      after(() => {
        modelStub.restore();
      });

      it('Returns car object', async () => {
        const model = new CarModel();
        const car = await model.readOne(hexadecimalId);
        expect(car).to.deep.equal(carMock);
      });
    });

    describe(`When car's not found`, () => {
      before(() => {
        modelStub = sinon.stub(moongose.Model, 'findOne')
          .resolves(null);
      });

      after(() => {
        modelStub.restore();
      });

      it('Returns null', async () => {
        const model = new CarModel();
        const car = await model.readOne(hexadecimalId);
        expect(car).to.deep.equal(null);
      });
    });
  });
});
