import express from "express";
import Mp3Conversor from "../controllers/Mp3ConversorController.js";
import UploadFile from "../middlewares/upload.js";

const routes = express.Router();

routes.post("/upload", UploadFile.upload, Mp3Conversor.converter);
routes.get("/download/:file", Mp3Conversor.downloadMp3);

export default routes;
