# PortuLearn 🇧🇷

> 通过 YouTube 视频学习巴西葡萄牙语的一站式 Web 工具

## 功能特性

- 🎬 **YouTube 视频嵌入** — 输入任意葡语 YouTube 链接
- 📖 **故事分段循环** — 自动按分钟分割视频，精准跳转
- 🔁 **段内循环播放** — 在当前故事段内无限循环
- 🗣 **双语字幕同步** — 葡语 + 中文实时高亮，点击跳转
- 🤖 **AI 词汇分析** — Gemini 自动提取词汇、生成双语对照
- 🃏 **翻转抽认卡** — 互动卡片练习记忆
- 📥 **学习材料导出** — 一键导出 Markdown 格式

## 快速开始

最快：直接打开线上页面（已通过 GitHub Pages 部署）：

```bash
open https://gavin-git-hub.github.io/portulearn/
```

本地启动（仅用于开发或预览）：

- 一键脚本（推荐）：

```bash
chmod +x start.sh && ./start.sh
```

- 手动（备用）：

```bash
python3 -m http.server 8765 --directory . && open http://localhost:8765
```

> ⚠️ **注意**：必须通过 HTTP(s) 服务器访问（不能使用 file:// 协议），否则 YouTube IFrame API 可能报错（例如 Error 153）。

脚本文件： [start.sh](start.sh) — 位于项目根目录；主应用文件： [index.html](index.html)。

## 项目结构

```
pt-learner/
├── index.html      # 完整应用（单文件，含 CSS + JS）
├── README.md       # 本文档
└── start.sh        # 一键启动脚本
```

## 使用方法

1. **输入 YouTube 链接** → 点击「▶ 开始」
2. **输入 Gemini API Key**（首次填写后自动保存）
3. 视频自动分为 5 分钟一段，默认循环当前段
4. 右侧字幕实时滚动，点击任意行精准跳转
5. 点击「✨ AI分析」→ 生成词汇表 + 抽认卡
6. 点击「📚 学习材料」查看/导出所有学习记录

## 快捷键

| 键 | 功能 |
|----|------|
| `空格` | 播放 / 暂停 |
| `← →` | 后退 / 前进 5 秒 |
| `↑ ↓` | 上一段 / 下一段 |
| `R` | 重播当前段 |
| `L` | 切换循环 |

## 配置说明

- **故事段长度**：默认 5 分钟，可在设置中调整（1-15 分钟）
- **播放速度**：0.5× / 0.75× / 1.0× / 1.25×
- **AI Key**：[获取 Gemini API Key](https://aistudio.google.com/app/apikey)

## 字幕说明

> YouTube 字幕受 CORS 限制，当前版本在无法获取真实字幕时使用内置演示字幕（小猪佩奇葡语，36 条含中文翻译）。如需真实字幕，可配套搭建本地字幕代理服务。

## 技术栈

- **纯 HTML/CSS/JS** — 无框架依赖，单文件部署
- **YouTube IFrame API** — 视频嵌入与控制
- **Gemini API** — `gemini-2.0-flash` 模型，词汇分析与翻译
- **localStorage** — 本地持久化 API Key 和学习材料
