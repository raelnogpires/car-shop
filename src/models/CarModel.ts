import { Schema, model as createModel, Document } from 'mongoose';

import { Car } from '../interfaces/CarInterface';

import MongooseModel from './MongooseModel';

interface CarDocument extends Car, Document {}

const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class CarModel extends MongooseModel<Car> {
  constructor(model = createModel('cars', carSchema)) {
    super(model);
  }
}
