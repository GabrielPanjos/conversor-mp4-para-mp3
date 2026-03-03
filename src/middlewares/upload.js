import multer from "multer";
import path from "path";
import fs from "fs/promises";

const uploadDir = path.join(process.cwd(), "src", "tmp", "uploads");

// ARRUMAR DEPOIS
await fs.rm(path.join(process.cwd(), "src", "tmp"), {
  recursive: true,
  force: true,
});

await fs.mkdir(uploadDir, {
  recursive: true,
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },

  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  fileFilter: (req, file, cb) => {
    const allowed = ["video/mp4"];

    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedMime.includes(file.mimetype) || ext !== ".mp4") {
      return cb(new Error("Apenas arquivos MP4 são permitidos"));
    }

    cb(null, true);
  },
  storage,
  limits: { fileSize: 250 * 1024 * 1024 },
}).single("file");

export default upload;
