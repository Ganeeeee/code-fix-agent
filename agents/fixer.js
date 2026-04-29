import { askLLM } from "../utils/llm.js";

export async function generateFix(error) {
  return await askLLM(`
请修复以下错误，并给出可执行命令：

${error}

要求：
- 必须包含 shell 命令
- 简洁明确
`);
}
