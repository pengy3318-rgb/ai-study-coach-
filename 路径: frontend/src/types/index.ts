export interface Task {
  id: string
  title: string
  emoji: string
  completed: boolean
  duration?: number
}

export type EnergyLevel = 'high' | 'medium' | 'low'

export interface StudyPlan {
  id: string
  timeSlot: string
  subject: string
  emoji: string
  coachAdvice?: string
}

export interface GrowthData {
  weeklyHours: number
  averageCompletionRate: number
  streak: number
  aiEvaluation: string
}
