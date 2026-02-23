import express from "express";
import Mp3Conversor from "../controllers/Mp3ConversorController.js";
import convertToMp3 from "../middlewares/convertMp4ToMp3.js";

const routes = express.Router();

routes.post("/conversion", Mp3Conversor.getMp4Url, convertToMp3);

export default routes;
