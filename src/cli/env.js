const parseEnv = () => {
  const inputVariables = Object.entries(process.env);
  const result = [];

  for (const [key, value] of inputVariables) {
    if (key.startsWith("RSS_")) {
      result.push(`${key}=${value}`);
    }
  }

  return console.log(result.join("; "));
};

parseEnv();
