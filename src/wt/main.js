import { Worker } from "worker_threads";
import { cpus } from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workerPath = `${__dirname}/worker.js`;
const startNumber = 10;

const performCalculations = async () => {
  const userCP = cpus();
  const promises = [];
  const result = [];

  userCP.forEach((_, index) =>
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {
          workerData: startNumber + index,
        });
        worker.on("message", (msg) => resolve(msg));
        worker.on("error", (error) => reject(error));
      })
    )
  );

  const workersResults = await Promise.allSettled(promises);

  for (const workerResult of workersResults) {
    result.push({
      status: workerResult.status === "fulfilled" ? "resolved" : "error",
      data: workerResult.status === "fulfilled" ? workerResult.value : null,
    });
  }

  return result.forEach((workerResult) => console.log(workerResult));
};

await performCalculations();
