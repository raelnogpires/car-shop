import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';

import Controller from './AbstractController';

export default class CarController extends Controller<Car> {
  private _route: string;

  constructor(
    service = new CarService(),
    route = '/cars',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }
}