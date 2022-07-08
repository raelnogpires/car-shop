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

  read = async (
    _req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const results = await this.service.read();
      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    try {
      const { id } = req.params;
      const result = await this.service.readOne(id);
      if (!result) {
        return res.status(404).json({ error: 'Object not found' });
      }

      if ('error' in result) {
        const err = result.error.issues[0].message;
        return res.status(400).json({ error: err });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  // update = async (
  //   req: RequestWithBody<T>,
  //   res: Response,
  // ): Promise<Response> => {
  //   try {
      
  //   } catch (error) {
  //     return res.status(500).json({ error: this.errors.internal });
  //   }
  // };
}

export default Controller;
