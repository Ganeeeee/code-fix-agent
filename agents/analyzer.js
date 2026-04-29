import { askLLM } from "../utils/llm.js";

export async function analyzeError(error) {
  return await askLLM(`
你是Node.js专家，请分析报错原因：

${error}

只输出：
原因：xxx
`);
}
