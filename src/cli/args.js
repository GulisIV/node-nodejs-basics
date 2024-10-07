const parseArgs = () => {
  const clArguments = process.argv.slice(2);
  const result = [];

  for (let index = 0; index < clArguments.length - 1; index++) {
    if (clArguments[index].startsWith("--")) {
      const argumentSliced = clArguments[index].slice(2);
      const argumentValue = clArguments[index + 1];
      result.push(`${argumentSliced} is ${argumentValue}`);
    }
  }

  return console.log(result.join(", "));
};

parseArgs();
