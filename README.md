# 🚀 Code Fix Agent

一个基于 AI 的自动代码报错修复 Agent。

## ✨ 功能
- 自动解析错误日志
- AI 分析错误原因
- 自动生成修复命令
- 自动执行并验证结果

## 🧠 工作流程
解析 → 分析 → 修复 → 执行 → 验证

## ⚡ 快速开始

```bash
npm install
cp .env.example .env
npm start
```

## 📊 示例输出
错误: npm ERR! better-sqlite3 failed to build
分析: 缺少编译环境
修复: npm install --global windows-build-tools
执行成功
