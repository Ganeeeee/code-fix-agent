import fs from "fs";
import chalk from "chalk";

import { parseLog } from "./agents/logParser.js";
import { analyzeError } from "./agents/analyzer.js";
import { generateFix } from "./agents/fixer.js";
import { runCommand } from "./agents/executor.js";
import { verify } from "./agents/verifier.js";

async function main() {
  console.log(chalk.blue("🚀 Code Fix Agent 启动\n"));

  const log = fs.readFileSync("./error.log", "utf-8");

  const parsed = parseLog(log);
  console.log(chalk.yellow("📌 错误:"), parsed.error);

  const analysis = await analyzeError(parsed.error);
  console.log(chalk.cyan("\n🧠 分析:\n"), analysis);

  const fix = await generateFix(parsed.error);
  console.log(chalk.green("\n🛠️ 修复方案:\n"), fix);

  const cmdMatch = fix.match(/npm .*|yarn .*|node .*/);

  if (!cmdMatch) {
    console.log("❌ 未检测到可执行命令");
    return;
  }

  const cmd = cmdMatch[0];
  console.log(chalk.magenta(`\n⚙️ 执行: ${cmd}\n`));

  const result = await runCommand(cmd);

  console.log("📊 结果:", verify(result));
}

main();
