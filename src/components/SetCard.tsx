import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type SetCardProps = {
  setNumber: number
  weight: number | null
  reps: number | null
  rest: number | null
  tempo: string | null
  isBonus?: boolean
}

export default function SetCard({
  setNumber,
  weight,
  reps,
  rest,
  tempo,
  isBonus = false,
}: SetCardProps) {
  const displayValue = (value: number | string | null) =>
    value === null ? '-' : value

  return (
    <View style={[styles.card, isBonus && styles.bonusCard]}>
      <Text style={styles.setTitle}>
        {isBonus ? 'Bonus Set' : `Set ${setNumber}`}
      </Text>

      <View style={styles.row}>
        <Stat label='Weight (lbs)' value={displayValue(weight)} />
        <Stat label='Reps' value={displayValue(reps)} />
        <Stat label='Rest (Secs)' value={displayValue(rest)} />
        <Stat label='Tempo' value={displayValue(tempo)} />
      </View>
    </View>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  bonusCard: {
    opacity: 0.6,
  },
  setTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    // flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop:4
  },
})
