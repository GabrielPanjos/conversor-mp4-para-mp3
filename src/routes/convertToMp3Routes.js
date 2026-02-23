import express from "express";
import conversor from "../controllers/index.js";

const routes = express.Router();

routes.post("/conversion", conversor.getMp4Url);

export default routes;
