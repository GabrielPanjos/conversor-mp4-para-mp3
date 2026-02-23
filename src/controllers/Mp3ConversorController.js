import path from "path";

export default class Mp3Conversor {
  static async getMp4Url(req, res, next) {
    try {
      const { fileMp4 } = req.query;

      req.fileMp4 = fileMp4;

      await next();
    } catch (err) {
      console.err(err);
    }
  }

  static async downloadMp3(req, res, next) {
    try {
      const mp3PathFile = path.join(
        process.cwd(),
        "src",
        "converted",
        req.params.file + ".mp3",
      );

      if (mp3PathFile) {
        console.log("caminho existe!");
        res.status(200).download(mp3PathFile);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
