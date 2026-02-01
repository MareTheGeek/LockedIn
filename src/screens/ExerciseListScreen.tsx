import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

const EXERCISES: Record<string, string[]> = {
  'Front Delts': [
    'Military Press',
    'Dumbbell Front Raise',
    'Incline Bench Press',
  ],
  'Side Delts': ['Dumbbell Lateral Raise', 'Cable Lateral Raise'],
  'Rear Delts': ['Face Pull', 'Reverse Fly'],
}

type Props = NativeStackScreenProps<RootStackParamList, 'Exercises'>

export default function ExerciseListScreen({ navigation, route }: Props) {
  const { subMuscle } = route.params
  const exercises = EXERCISES[subMuscle] ?? []

  return (
    <View style={styles.container}>
      {exercises.map((exercise) => (
        <Pressable
          key={exercise}
          style={styles.button}
          onPress={() =>
            navigation.navigate('ExerciseDetail', {
              exerciseName: exercise,
            })
          }
        >
          <Text style={styles.text}>{exercise}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
