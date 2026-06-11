# 🌱 AI Study Coach

## 产品定位

**AI 学习教练** - 不是学习计划生成器，而是你的实时学习监督者

### 核心价值
- **ChatGPT** 负责回答问题
- **AI Study Coach** 负责监督你学习

### 设计理念
- 简洁、治愈、专业
- Forest / Notion / Headspace 风格
- 白色背景 + 浅绿色点缀

## 主要功能

### 1️⃣ 首页 Dashboard
- 欢迎语气（Good Evening, Peng）
- 可支配时间展示
- 连续学习天数
- 周完成率

### 2️⃣ 智能规划页
- 添加任务
- 精力评估（高/中/低）
- 可用时间选择
- AI 生成学习计划

### 3️⃣ 专注模式 ⭐
- 实时计时
- AI 动态建议
- 暂停/完成按钮
- Coach 鼓励语

### 4️⃣ 晚间复盘
- 完成度评估
- 困难记录
- AI 生成复盘

### 5️⃣ 成长面板
- 周学习时长
- 平均完成率
- 连续学习天数
- AI 评价

## 技术栈

### Frontend
- React 18 + TypeScript
- Tailwind CSS (绿色主题)
- Vite (构建工具)

### Backend
- Python FastAPI
- OpenAI API (AI 教练)
- SQLite

## 快速开始

### 前端

```bash
cd frontend
npm install
npm run dev
```

访问：http://localhost:5173

### 后端

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python src/main.py
```

访问：http://localhost:8000

## 为什么做这个？

因为我自己同时面临课程复习和实习申请两个目标，经常不知道如何分配时间。我发现市面上的待办工具只能记录任务，却不能像教练一样根据实际情况动态调整计划，所以尝试利用 AI 设计一个学习教练产品。

## 未来规划

- **V2**: AI 分析学习习惯
- **V3**: 考试模式
- **V4**: 秋招模式
