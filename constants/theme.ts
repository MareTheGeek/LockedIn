export const colors = {
  primary: '#fff1e8',
  secondary: '#000000',
  accent1: '#fdbe01',
  accent2: '#fd5800',
  accent3: '#12f337',
  disabled1: '#808080',
  disabled2: '#404040',
  destructive: '#DC2626',
} as const

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  30: 120,
  60: 240,
} as const

export const components = {
  tabBar: {
    height: spacing[18],
    horizontalInset: spacing[5],
    radius: spacing[8],
    iconFrame: spacing[12],
    itemPaddingVertical: spacing[2],
  },
} as const

export const theme = {
  colors,
  spacing,
  components,
} as const
