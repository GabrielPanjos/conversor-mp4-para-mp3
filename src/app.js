import express from "express";
import routes from "./routes/index.js";
import manipulator404 from "./middlewares/manipulator404.js";
import errorsManipulator from "./middlewares/errorsManipulator.js";

const app = express();

routes(app);

app.use(manipulator404);

app.use(errorsManipulator);

export default app;
