import multer from "multer";
import path from "path";
import fs from "fs/promises";

const uploadDir = path.join(process.cwd(), "src", "tmp", "uploads");

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

const upload = multer({ storage }).single("file");

export default upload;
