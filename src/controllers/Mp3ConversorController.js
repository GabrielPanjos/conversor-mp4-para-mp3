import convertToMp3 from "../services/convertMp4ToMp3.js";
import fs from "fs";
import path from "path";
import NaoEncontrado from "../errors/NaoEncontrado.js";

export default class Mp3Conversor {
  static async downloadMp3(req, res, next) {
    try {
      const fileName = req.params.file;

      const filePath = path.format({
        dir: path.join(process.cwd(), "src", "tmp", "converted"),
        name: fileName,
        ext: ".mp3",
      });

      if (!fs.existsSync(filePath)) {
        return next(new NaoEncontrado("Arquivo mp3 não encontrado."));
      }

      return res.download(filePath);
    } catch (err) {
      next(err);
    }
  }

  static async converter(req, res, next) {
    try {
      const file = req.file;

      const output = await convertToMp3(file);

      if (output) {
        res.status(200).json(output);
      }
    } catch (err) {
      next(err);
    }
  }
}
