import home from '@/assets/icons/home.svg'
import insights from '@/assets/icons/insights.svg'
import profile from '@/assets/icons/profile.svg'
import sessionHistory from '@/assets/icons/session-history.svg'
import startSession from '@/assets/icons/start-session.svg'

import homeFocused from '@/assets/icons/homeFocused.svg'
import insightsFocused from '@/assets/icons/insightsFocused.svg'
import profileFocused from '@/assets/icons/profileFocused.svg'
import sessionHistoryFocused from '@/assets/icons/session-historyFocused.svg'

export const icons = {
  notFocused: {
    home,
    sessionHistory,
    startSession,
    insights,
    profile,
  },
  Focused: {
    homeFocused,
    sessionHistoryFocused,
    insightsFocused,
    profileFocused,
  },
} as const

export type IconKey = keyof typeof icons
