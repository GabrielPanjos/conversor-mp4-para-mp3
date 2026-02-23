import Ffmpeg from "fluent-ffmpeg";
import path from "path";

export default async function convertToMp3(req, res, next) {
  try {
    if (!path.basename(req.fileMp4).includes(".mp4")) {
      throw new Error("Arquivo mp4 não encontrado.");
    }

    const outputFile = path.parse(path.basename(req.fileMp4)).name;

    const outputPath = path.join(
      process.cwd(),
      "src",
      "tmp",
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
          fileName: outputFile + ".mp3",
        });
      } else {
        res.status(404).send("Arquivo mp3 não encontrado.");
      }
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
