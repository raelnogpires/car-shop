import { Router } from 'express';
import AbstractController from '../controllers/AbstractController';

class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: AbstractController<T>,
    route: string = controller.route,
  ) {
    this.router.post(route, controller.create);
  }
}

export default CustomRouter;
