import { Transform, pipeline } from "stream";

const transform = async () => {
  const transformData = new Transform({
    transform(chunk, encoding, callback) {
      const revertedData = chunk.toString().split("").reverse().join("");
      callback(null, revertedData);
    },
  });

  pipeline(process.stdin, transformData, process.stdout, (err) => {
    throw err;
  });
};

await transform();
