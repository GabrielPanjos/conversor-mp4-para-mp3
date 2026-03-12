import multer from "multer";
import path from "path";
import IncorrectRequest from "../errors/IncorrectRequest.js";
import deleteTempFiles from "../services/deleteTmpFiles.js";

const uploadDir = path.join(process.cwd(), "src", "tmp", "uploads");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },

  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export default class UploadFile {
  static async upload(req, res, next) {
    await deleteTempFiles();

    const upload = multer({
      fileFilter: (req, file, cb) => {
        const allowed = ["video/mp4"];

        const ext = path.extname(file.originalname).toLowerCase();

        if (!allowed.includes(file.mimetype) || ext !== ".mp4") {
          return cb(
            new IncorrectRequest("Apenas arquivos MP4 são permitidos"),
          );
        }

        cb(null, true);
      },
      storage,
      limits: { fileSize: 250 * 1024 * 1024 },
    }).single("file");

    upload(req, res, next);
  }
}
