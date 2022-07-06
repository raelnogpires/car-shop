import { Request, Response } from 'express';
import Service from '../services/AbstractService';

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}

export type ResponseError = {
  error: unknown;
};

abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) { }

  create = async (
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const created = await this.service.create(req.body);
      if ('error' in created) {
        return res.status(400).json(created);
      }

      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default Controller;
