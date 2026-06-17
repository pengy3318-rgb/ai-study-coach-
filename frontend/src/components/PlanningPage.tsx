import React, { useState } from 'react'

interface PlanningPageProps {
  onGeneratePlan: (tasks: any[], energy: string, hours: number) => Promise<void>
}

export const PlanningPage: React.FC<PlanningPageProps> = ({ onGeneratePlan }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: '统计学期末复习', emoji: '📘', completed: false },
    { id: '2', title: '保险学简答题整理', emoji: '📗', completed: false },
    { id: '3', title: '数据分析实习投递', emoji: '💼', completed: false },
  ])
  const [energy, setEnergy] = useState('medium')
  const [availableHours, setAvailableHours] = useState(3)
  const [newTask, setNewTask] = useState('')
  const [loading, setLoading] = useState(false)

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        title: newTask,
        emoji: '📝',
        completed: false,
      }])
      setNewTask('')
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const generatePlan = async () => {
    setLoading(true)
    try {
      await onGeneratePlan(tasks.filter(t => !t.completed), energy, availableHours)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white', padding: '24px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>
        今天要完成什么？
      </h1>

      <div className="card" style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: '24px' }}>
          {tasks.map(task => (
            <label key={task.id} style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '8px',
            }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <span style={{ marginLeft: '12px', fontSize: '18px' }}>{task.emoji}</span>
              <span style={{
                marginLeft: '12px',
                flex: 1,
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#757575' : '#1B1B1B',
              }}>
                {task.title}
              </span>
            </label>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="＋ 添加新任务"
            style={{
              flex: 1,
              padding: '10px 12px',
              border: '1px solid #E8E8E8',
              borderRadius: '12px',
              fontSize: '14px',
            }}
          />
          <button onClick={addTask} className="btn btn-primary">
            添加
          </button>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          当前精力
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { value: 'high', label: '😄 高', desc: '精力充沛，可以做难度高的任务' },
            { value: 'medium', label: '🙂 中', desc: '正常水平' },
            { value: 'low', label: '😴 低', desc: '有些疲劳，适合做简单任务' },
          ].map(option => (
            <label key={option.value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="radio"
                name="energy"
                value={option.value}
                checked={energy === option.value}
                onChange={(e) => setEnergy(e.target.value)}
                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <span style={{ marginLeft: '12px', flex: 1 }}>
                <div style={{ fontWeight: '500' }}>{option.label}</div>
                <div style={{ fontSize: '12px', color: '#757575' }}>{option.desc}</div>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          可用时间
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <input
            type="range"
            min="0.5"
            max="12"
            step="0.5"
            value={availableHours}
            onChange={(e) => setAvailableHours(parseFloat(e.target.value))}
            style={{ flex: 1, height: '8px', cursor: 'pointer' }}
          />
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#4CAF50', minWidth: '60px', textAlign: 'right' }}>
            {availableHours}h
          </span>
        </div>
      </div>

      <button
        onClick={generatePlan}
        disabled={loading}
        className="btn btn-primary"
        style={{ width: '100%', padding: '12px', fontSize: '16px' }}
      >
        {loading ? '⏳ AI 正在生成计划...' : '✨ AI生成学习计划'}
      </button>
    </div>
  )
}
