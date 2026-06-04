#!/bin/bash
# PortuLearn 一键启动脚本

PORT=8765
DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🇧🇷 PortuLearn 启动中..."
echo "📂 项目目录: $DIR"
echo "🌐 访问地址: http://localhost:$PORT"
echo ""
echo "按 Ctrl+C 停止服务器"
echo "---"

# 检查端口是否已被占用
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
  echo "✅ 端口 $PORT 已有服务，直接打开浏览器..."
else
  # 后台启动 Python HTTP 服务器
  python3 -m http.server $PORT --directory "$DIR" &
  sleep 1
fi

# 打开浏览器
open "http://localhost:$PORT"

# 等待服务器
wait
