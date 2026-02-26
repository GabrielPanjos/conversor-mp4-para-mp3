import express from "express";
import Mp3Conversor from "../controllers/Mp3ConversorController.js";
import convertToMp3 from "../middlewares/convertMp4ToMp3.js";
import uploadFile from "../middlewares/upload.js";

const routes = express.Router();

routes.post("/upload", uploadFile, convertToMp3);
routes.get("/download/:file", Mp3Conversor.downloadMp3);

export default routes;
