import Ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import path from "path";
import fs from "fs";
import NaoEncontrado from "../errors/NaoEncontrado.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";

export default async function convertToMp3(file) {
  if (!ffmpegPath) {
    throw new Error("FFmpeg não encontrado.");
  }

  Ffmpeg.setFfmpegPath(ffmpegPath);

  try {
    if (!file || !fs.existsSync(file.path)) {
      return next(new NaoEncontrado("Arquivo MP4 não encontrado."));
    }

    if (path.extname(file.originalname).toLowerCase() !== ".mp4") {
      return next(
        new RequisicaoIncorreta(
          "Formato inválido. Apenas arquivos MP4 são permitidos.",
        ),
      );
    }

    const { name } = path.parse(file.originalname);

    const outputPath = path.join(
      process.cwd(),
      "src",
      "tmp",
      "converted",
      `${name}.mp3`,
    );

    fs.mkdirSync(path.dirname(outputPath), {
      recursive: true,
    });

    await new Promise((resolve, reject) => {
      Ffmpeg(file.path)
        .noVideo()
        .audioBitrate(192)
        .audioFrequency(44100)
        .format("mp3")
        .save(outputPath)
        .on("end", resolve)
        .on("error", () =>
          reject(
            new RequisicaoIncorreta(
              "Arquivo inválido ou não é um vídeo MP4 válido",
            ),
          ),
        );
    });

    return {
      message: "Arquivo convertido com sucesso!",
      fileName: `${name}.mp3`,
    };
  } catch (err) {
    next(err);
  }
}
