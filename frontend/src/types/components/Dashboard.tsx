import React from 'react'

interface DashboardProps {
  userName: string
  availableHours: number
  streakDays: number
  weeklyCompletion: number
}

export const Dashboard: React.FC<DashboardProps> = ({
  userName,
  availableHours,
  streakDays,
  weeklyCompletion,
}) => {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 18) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div style={{ minHeight: '100vh', background: 'white', padding: '24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '8px' }}>
          🌱 AI Study Coach
        </h1>
        <p style={{ fontSize: '24px', fontWeight: '500' }}>
          {getGreeting()}, {userName}
        </p>
      </div>

      <div className="card" style={{ marginBottom: '24px', padding: '24px' }}>
        <p style={{ color: '#757575', fontSize: '14px', marginBottom: '8px' }}>
          今天你有多少可支配时间
        </p>
        <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '16px' }}>
          {availableHours}h
        </p>
        <button className="btn btn-primary" style={{ width: '100%' }}>
          开始今日规划
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div className="card">
          <p style={{ color: '#757575', fontSize: '14px', marginBottom: '8px' }}>
            连续学习
          </p>
          <div>
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#4CAF50' }}>
              🔥 {streakDays}
            </span>
            <span style={{ color: '#757575', marginLeft: '8px' }}>Days</span>
          </div>
        </div>

        <div className="card">
          <p style={{ color: '#757575', fontSize: '14px', marginBottom: '8px' }}>
            本周完成率
          </p>
          <div>
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#4CAF50' }}>
              📈 {weeklyCompletion}%
            </span>
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', color: '#757575' }}>本周学习进度</span>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>{weeklyCompletion}%</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: '#E8E8E8', borderRadius: '4px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(to right, #81C784, #4CAF50)',
              borderRadius: '4px',
              width: `${weeklyCompletion}%`,
              transition: 'width 0.5s ease',
            }}
          />
        </div>
      </div>
    </div>
  )
}
