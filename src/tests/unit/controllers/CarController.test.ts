import sinon, { SinonStub } from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

import { carMock } from '../../mocks/car.mock';

import CarController from '../../../controllers/CarController';

import CarService from '../../../services/CarService';

import server from '../../../server';

describe('03 - Tests CarController', () => {
  describe('CarController.create', () => {
    let serviceMock: SinonStub;
    const carController = new CarController();

    before(() => {
      serviceMock = sinon
        .stub(CarService.prototype, 'create')
        .resolves(carMock);
    });

    after(() => {
      serviceMock.restore();
    });

    it('Success', async () => {
      const res = await chai
        .request(server.app)
        .post(`${carController.route}`)
        .send(carMock);

      expect(res.status).to.equal(201);
      expect(res.body).to.deep.equal(carMock);
    });
  });
});
