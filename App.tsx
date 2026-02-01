import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MuscleGroupsScreen from './src/screens/MuscleGroupsScreen'
import SubMuscleScreen from './src/screens/SubMuscleScreen'
import ExerciseListScreen from './src/screens/ExerciseListScreen'
import ExerciseDetailScreen from './src/screens/ExerciseDetailScreen'

export type RootStackParamList = {
  MuscleGroups: undefined
  SubMuscles: { muscleGroup: string }
  Exercises: { muscleGroup: string; subMuscle: string }
  ExerciseDetail: { exerciseName: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MuscleGroups'
          component={MuscleGroupsScreen}
          options={{ title: 'Muscle Groups' }}
        />
        <Stack.Screen
          name='SubMuscles'
          component={SubMuscleScreen}
          options={{ title: 'Sub Muscles' }}
        />
        <Stack.Screen
          name='Exercises'
          component={ExerciseListScreen}
          options={{ title: 'Exercises' }}
        />
        <Stack.Screen
          name='ExerciseDetail'
          component={ExerciseDetailScreen}
          options={{ title: 'Exercise' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
