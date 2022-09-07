import express, { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import connectToDatabase from './connection';
import docs from './swagger.json';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectToDatabase();
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
