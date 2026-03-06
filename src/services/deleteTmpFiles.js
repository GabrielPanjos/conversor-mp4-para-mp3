import fs from "fs/promises";
import path from "path";

export default async function deleteTempFiles() {
  const tmpDir = path.join(process.cwd(), "src", "tmp");

  await fs.rm(tmpDir, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(path.join(tmpDir, "uploads"), {
    recursive: true,
  });

  await fs.mkdir(path.join(tmpDir, "converted"), {
    recursive: true,
  });
}
