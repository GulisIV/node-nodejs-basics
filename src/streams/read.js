import { createReadStream } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = `${__dirname}/files/fileToRead.txt`;

const read = async () => {
  try {
    const readStream = createReadStream(filePath);
    readStream.pipe(process.stdout);
  } catch (e) {
    throw e;
  }
};

await read();
