import React from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import SetCard from '../components/SetCard'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type Props = NativeStackScreenProps<RootStackParamList, 'ExerciseDetail'>

type SetData = {
  setNumber: number
  weight: number | null
  reps: number | null
  rest: number | null
  tempo: string | null
}

const SETS: SetData[] = [
  { setNumber: 1, weight: 25, reps: 10, rest: 90, tempo: 'Concentric' },
  { setNumber: 2, weight: 25, reps: 10, rest: 90, tempo: 'Concentric' },
  { setNumber: 3, weight: 25, reps: 10, rest: 90, tempo: 'Concentric' },
  { setNumber: 4, weight: null, reps: null, rest: null, tempo: null },
]

export default function ExerciseDetailScreen({ route }: Props) {
  const { exerciseName } = route.params
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.exerciseName}>{exerciseName}</Text>
      <Text style={styles.title}>PR Summary</Text>

      {SETS.map((set) => (
        <SetCard
          key={set.setNumber}
          setNumber={set.setNumber}
          weight={set.weight}
          reps={set.reps}
          rest={set.rest}
          tempo={set.tempo}
          isBonus={set.setNumber === 4}
        />
      ))}
      <Pressable style={styles.startButton}>
        <Text style={styles.startText}>Start Workout</Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  startButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  startText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
  exerciseName: {
    fontSize: 16
  }
})
