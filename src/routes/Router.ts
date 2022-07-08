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
    routeId = `${route}/:id`,
  ) {
    this.router.post(route, controller.create);
    this.router.get(route, controller.read);
    this.router.get(routeId, controller.readOne);
    this.router.put(routeId, controller.update);
    this.router.delete(routeId, controller.delete);
  }
}

export default CustomRouter;
