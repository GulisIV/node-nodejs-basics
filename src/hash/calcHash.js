import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
const hashAlgoritm = "sha256";
const hashEncoding = "hex";

const calculateHash = async () => {
  try {
    const fileData = await readFile(filePath);
    const hash = createHash(hashAlgoritm).update(fileData).digest(hashEncoding);
    console.log(hash);
  } catch (e) {
    throw e;
  }
};

await calculateHash();
