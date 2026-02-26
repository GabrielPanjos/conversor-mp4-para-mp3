import fs from "fs";
import path from "path";
import NaoEncontrado from "../errors/NaoEncontrado.js";

export default class Mp3Conversor {
  static async downloadMp3(req, res, next) {
    try {
      const fileName = req.params.file;

      const filePath = path.join(
        process.cwd(),
        "src",
        "tmp",
        "converted",
        fileName,
      );

      if (!fs.existsSync(filePath)) {
        return next(new NaoEncontrado("Arquivo mp3 não encontrado."));
      }

      return res.download(filePath);
    } catch (err) {
      next(err);
    }
  }
}
