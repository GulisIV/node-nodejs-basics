import { createWriteStream } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = `${__dirname}/files/fileToWrite.txt`;

const write = async () => {
  try {
    const writeStream = createWriteStream(filePath);
    process.stdin.pipe(writeStream);
  } catch (e) {
    throw e;
  }
};

await write();
