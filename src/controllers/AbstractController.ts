import { Request, Response } from 'express';
import Service from '../services/AbstractService';

export interface RequestWithBody<T> extends Request {
  body: T;
}

abstract class Controller<T> {
  abstract route: string;

  constructor(protected service: Service<T>) { }

  abstract create(
    req: RequestWithBody<T>,
    res: Response,
  ): Promise<typeof res>;
}

export default Controller;
