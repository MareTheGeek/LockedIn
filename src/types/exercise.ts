export interface Exercise {
  id: string
  name: string
}

export interface SubMuscles {
  id: string
  name: string
  exercises: Exercise[]
}

export interface MainMuscleGroup {
  id: string
  name: string
  // subMuscles: SubMuscles[]
  expanded: boolean
  selectedMuscle: MuscleName | null
  onPress: () => void
}

export type MuscleName =
  | 'Shoulders'
  | 'Abs'
  | 'Chest'
  | 'Triceps'
  | 'Back'
  | 'Biceps'
  | 'Legs'
  | 'Glutes'

export interface MainMuscleProps extends MainMuscleGroup {
  
}
