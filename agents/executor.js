import { exec } from "child_process";

export function runCommand(cmd) {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      resolve({
        success: !error,
        stdout,
        stderr
      });
    });
  });
}
