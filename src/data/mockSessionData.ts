import { mockMuscleGroup } from './mockExerciseData'
import { WorkoutSession } from '../types/session'

export const mockWorkoutSession: WorkoutSession[] = [
  {
    session_id: '445351d1-9564-4ab9-844b-2c2abb087163',
    status: 'In Progress',
    time_started: '2026-11-10T18:00:00Z',
    time_ended: null,
    exercise_list: [
      {
        main_muscle_id: mockMuscleGroup[0].id,
        main_muscle_group: mockMuscleGroup[0].name, // Shoulders
        exercises: [
          {
            session_exercise_id: '10584695-6ce1-42e0-bad1-501a6a59f326',
            sub_muscle_id: mockMuscleGroup[0].subMuscles[0].id,
            sub_muscle_name: mockMuscleGroup[0].subMuscles[0].name, // Front Delts
            exercise_id: mockMuscleGroup[0].subMuscles[0].exercises[0].id,
            exercise_name: mockMuscleGroup[0].subMuscles[0].exercises[0].name, // Military Press
            sets: [
              {
                set_id: '8dd97d1c-d592-4a8f-9a87-60249b2012b1',
                set_number: 1,
                weight: 45,
                reps: 10,
                rest_time: 90,
                tempo: 'Normal',
                note: null,
                created_at: '2026-11-10T18:08:00Z',
              },
              {
                set_id: 'c0ec40c9-2220-4ccc-af5c-90ac5719799c',
                set_number: 2,
                weight: 45,
                reps: 10,
                rest_time: 90,
                tempo: 'Normal',
                note: null,
                created_at: '2026-11-10T18:08:00Z',
              },
              {
                set_id: 'f8cc79ea-70bc-4550-833e-09555ffbe7ee',
                set_number: 3,
                weight: 45,
                reps: 8,
                rest_time: 90,
                tempo: 'Normal',
                note: 'Failure on last rep.',
                created_at: '2026-11-10T18:08:00Z',
              },
            ],
          },
          {
            session_exercise_id: 'd8d87e3a-36fd-48b9-b71a-b4e2dd73ff03',
            sub_muscle_id: mockMuscleGroup[0].subMuscles[1].id,
            sub_muscle_name: mockMuscleGroup[0].subMuscles[1].name, // Side Delts
            exercise_id: mockMuscleGroup[0].subMuscles[1].exercises[0].id,
            exercise_name: mockMuscleGroup[0].subMuscles[1].exercises[0].name, // Lateral Raises
            sets: [],
          },
          {
            session_exercise_id: 'b94dc57a-c780-417c-916f-878da480ac79',
            sub_muscle_id: mockMuscleGroup[0].subMuscles[2].id,
            sub_muscle_name: mockMuscleGroup[0].subMuscles[2].name, // Rear Delts
            exercise_id: mockMuscleGroup[0].subMuscles[2].exercises[0].id,
            exercise_name: mockMuscleGroup[0].subMuscles[2].exercises[0].name, // Face Pull
            sets: [],
          },
        ],
      },
      {
        main_muscle_id: mockMuscleGroup[1].id,
        main_muscle_group: mockMuscleGroup[1].name, // Abs
        exercises: [
          {
            session_exercise_id: 'fae10072-c8ff-48f7-b0c0-cd83e610982c',
            sub_muscle_id: mockMuscleGroup[1].subMuscles[0].id,
            sub_muscle_name: mockMuscleGroup[1].subMuscles[0].name, // Upper Abs
            exercise_id: mockMuscleGroup[1].subMuscles[0].exercises[0].id,
            exercise_name: mockMuscleGroup[1].subMuscles[0].exercises[0].name, // Sit Ups
            sets: [],
          },
          {
            session_exercise_id: '1f9e65ed-e6ec-4331-a3a9-01cc450d2d61',
            sub_muscle_id: mockMuscleGroup[1].subMuscles[1].id,
            sub_muscle_name: mockMuscleGroup[1].subMuscles[1].name, // Obliques
            exercise_id: mockMuscleGroup[1].subMuscles[1].exercises[0].id,
            exercise_name: mockMuscleGroup[1].subMuscles[1].exercises[0].name, // Side Bends
            sets: [],
          },
          {
            session_exercise_id: '3f146a8a-0e69-429e-84d2-bb8e373480ed',
            sub_muscle_id: mockMuscleGroup[1].subMuscles[2].id,
            sub_muscle_name: mockMuscleGroup[1].subMuscles[2].name, // Lower Abs
            exercise_id: mockMuscleGroup[1].subMuscles[2].exercises[0].id,
            exercise_name: mockMuscleGroup[1].subMuscles[2].exercises[0].name, // Leg Raises
            sets: [],
          },
        ],
      },
    ],
  },
]
