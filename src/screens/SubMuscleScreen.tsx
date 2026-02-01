import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

const SUB_MUSCLES: Record<string, string[]> = {
  Shoulders: ['Front Delts', 'Side Delts', 'Rear Delts'],
  Abdominals: ['Uppeer Abs', 'Obliques', 'Lower Abs'],
  Chest: ['Upper Chest', 'Mid Chest', 'Lower Chest'],
}

type Props = NativeStackScreenProps<RootStackParamList, 'SubMuscles'>

export default function SubMuscleScreen({ route, navigation }: Props) {
  const { muscleGroup } = route.params
  const subMuscles = SUB_MUSCLES[muscleGroup] ?? []

  return (
    <View style={styles.container}>
      {subMuscles.map((sub) => (
        <Pressable
          key={sub}
          style={styles.button}
          onPress={() =>
            navigation.navigate('Exercises', { muscleGroup, subMuscle: sub })
          }
        >
          <Text style={styles.text}>{sub}</Text>
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
