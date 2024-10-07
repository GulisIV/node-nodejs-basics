import { fork } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const modulePath = `${__dirname}/files/script.js`;

const spawnChildProcess = async (args) => {
  fork(modulePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
