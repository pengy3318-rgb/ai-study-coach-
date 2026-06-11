from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="AI Study Coach Backend",
    description="Your AI Learning Coach API",
    version="1.0.0"
)

# CORS配置 - 允许前端访问
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 健康检查
@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "AI Study Coach is running"}

# 生成学习计划 API
@app.post("/api/study-plans/generate")
async def generate_study_plan(request: dict):
    """
    根据任务、精力等级和可用时间生成学习计划
    """
    try:
        tasks = request.get("tasks", [])
        energy = request.get("energy", "medium")
        available_hours = request.get("available_hours", 3)
        
        # Mock 返回数据（这里可以接入 OpenAI API）
        return {
            "success": True,
            "plans": [
                {
                    "id": "1",
                    "time_slot": "18:00-18:50",
                    "subject": "Statistics",
                    "emoji": "📘",
                    "coach_advice": "先做前两道题，不要想着完成整章。"
                },
                {
                    "id": "2",
                    "time_slot": "19:00-19:50",
                    "subject": "Insurance",
                    "emoji": "📗",
                    "coach_advice": "重点复习第三章的简答题"
                }
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# 获取成长数据 API
@app.get("/api/growth")
async def get_growth_data():
    """
    获取本周学习数据
    """
    return {
        "weekly_hours": 18.5,
        "average_completion_rate": 82,
        "streak": 6,
        "ai_evaluation": "专注力提升 12%，保持这个势头！"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
