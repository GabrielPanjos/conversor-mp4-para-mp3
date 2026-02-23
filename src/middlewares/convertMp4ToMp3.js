import Ffmpeg from "fluent-ffmpeg";
import path from "path";

export default async function convertToMp3(req, res, next) {
  try {
    const safeName = path.parse(path.basename(req.mp4)).name;

    const inputPath = path.join(
      process.cwd(),
      "src",
      "tmp",
      "uploads",
      `${safeName}.mp4`,
    );

    const fileName = path.parse(safeName).name;
    const outputFile = `${fileName}.mp3`;

    const outputPath = path.join(
      process.cwd(),
      "src",
      "tmp",
      "converted",
      outputFile,
    );

    await new Promise((resolve, reject) => {
      Ffmpeg(inputPath)
        .noVideo()
        .audioBitrate(192)
        .audioFrequency(44100)
        .format("mp3")
        .save(outputPath)
        .on("end", resolve)
        .on("error", reject);

      res.status(200).json({
        message: "Arquivo convertido com sucesso!",
        fileName: outputFile,
      });
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
}
