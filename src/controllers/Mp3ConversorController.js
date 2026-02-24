import path from "path";
import fs from "fs";
import NaoEncontrado from "../errors/NaoEncontrado.js";

export default class Mp3Conversor {
  static async getMp4Url(req, res, next) {
    try {
      const { fileMp4 } = req.query;

      req.fileMp4 = fileMp4;

      next();
    } catch (err) {
      next(err);
    }
  }

  static async downloadMp3(req, res, next) {
    try {
      const mp3PathFile = path.join(
        process.cwd(),
        "src",
        "converted",
        req.params.file,
      );

      if (fs.existsSync(mp3PathFile)) {
        await res.status(200).download(mp3PathFile);
      } else {
        next(new NaoEncontrado("Arquivo mp3 não encontrado."));
      }
    } catch (err) {
      next(err);
    }
  }
}
