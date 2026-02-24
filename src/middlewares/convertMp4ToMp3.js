import Ffmpeg from "fluent-ffmpeg";
import path from "path";
import NaoEncontrado from "../errors/NaoEncontrado.js";

export default async function convertToMp3(req, res, next) {
  try {
    if (!path.basename(req.fileMp4).includes(".mp4")) {
      next(new NaoEncontrado("Arquivo mp4 não encontrado."));
    }

    const outputFile = path.parse(path.basename(req.fileMp4)).name;

    const outputPath = path.join(
      process.cwd(),
      "src",
      "converted",
      outputFile + ".mp3",
    );

    await new Promise((resolve, reject) => {
      Ffmpeg(req.fileMp4)
        .noVideo()
        .audioBitrate(192)
        .audioFrequency(44100)
        .format("mp3")
        .save(outputPath)
        .on("end", resolve)
        .on("error", reject);

      if (path.basename(outputPath).includes(".mp3")) {
        res.status(200).json({
          message: "Arquivo convertido com sucesso!",
          fileName: outputFile,
        });
      } else {
        next(new NaoEncontrado("Arquivo mp3 não encontrado."));
      }
    });
  } catch (err) {
    next(err);
  }
}
