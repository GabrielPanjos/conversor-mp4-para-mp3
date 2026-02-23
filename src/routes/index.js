import convertToMp3Routes from "./convertToMp3Routes.js";

const routes = (app) => {
  app.use(convertToMp3Routes);
};

export default routes;
