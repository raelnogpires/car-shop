import { z } from 'zod';

const carInterface = z.object({
  doorQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type Car = z.infer<typeof carInterface>;
