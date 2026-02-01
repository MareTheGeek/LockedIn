import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

const MUSCLE_GROUPS = [
  'Shoulders',
  'Abdominals',
  'Chest',
  'Triceps',
  'Back',
  'Biceps',
  'Legs',
]

type Props = NativeStackScreenProps<RootStackParamList, 'MuscleGroups'>

export default function MuscleGroupsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {MUSCLE_GROUPS.map((group) => (
        <Pressable
          key={group}
          style={styles.button}
          onPress={() =>
            navigation.navigate('SubMuscles', { muscleGroup: group })
          }
        >
          <Text style={styles.text}>{group}</Text>
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
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
})
