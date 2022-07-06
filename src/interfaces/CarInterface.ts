import { z } from 'zod';
import { vehicleInterface } from './VehicleInterface';

const carInterface = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

const car = vehicleInterface.merge(carInterface);

export type Car = z.infer<typeof car>;
