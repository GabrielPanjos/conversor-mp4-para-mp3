import express from "express";
import routes from "./routes/index.js";
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorDeErros from "./middlewares/ManipuladorDeErros.js";

const app = express();

routes(app);

app.use(manipulador404);

app.use(manipuladorDeErros);

export default app;
