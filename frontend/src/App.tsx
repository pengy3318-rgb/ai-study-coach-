import React, { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { PlanningPage } from './components/PlanningPage'
import './styles/global.css'

type PageType = 'dashboard' | 'planning'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard')

  const handleGeneratePlan = async (tasks: any[], energy: string, hours: number) => {
    console.log('生成计划中...', { tasks, energy, hours })
    setTimeout(() => {
      alert('✨ 学习计划已生成！\n\n18:00-18:50 📘 Statistics\n先做前两道题，不要想着完成整章。')
      setCurrentPage('dashboard')
    }, 1500)
  }

  const Navigation = () => (
    <nav style={{
      background: 'white',
      borderBottom: '1px solid #E8E8E8',
      padding: '12px 24px',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{ display: 'flex', gap: '8px', maxWidth: '1200px', margin: '0 auto' }}>
        <button
          onClick={() => setCurrentPage('dashboard')}
          style={{
            padding: '8px 16px',
            borderRadius: '12px',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            background: currentPage === 'dashboard' ? '#4CAF50' : 'transparent',
            color: currentPage === 'dashboard' ? 'white' : '#1B1B1B',
            transition: 'all 0.3s',
          }}
        >
          📊 首页
        </button>
        <button
          onClick={() => setCurrentPage('planning')}
          style={{
            padding: '8px 16px',
            borderRadius: '12px',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer',
            background: currentPage === 'planning' ? '#4CAF50' : 'transparent',
            color: currentPage === 'planning' ? 'white' : '#1B1B1B',
            transition: 'all 0.3s',
          }}
        >
          📝 规划
        </button>
      </div>
    </nav>
  )

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <Navigation />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {currentPage === 'dashboard' && (
          <Dashboard
            userName="Peng"
            availableHours={3}
            streakDays={6}
            weeklyCompletion={82}
          />
        )}
        {currentPage === 'planning' && (
          <PlanningPage onGeneratePlan={handleGeneratePlan} />
        )}
      </div>
    </div>
  )
}

export default App
