export function parseLog(log) {
  const lines = log.split("\n");
  const errorLine = lines.find(l => l.toLowerCase().includes("error"));

  return {
    raw: log,
    error: errorLine || log
  };
}
