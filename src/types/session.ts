export interface WorkoutSession {
    session_id: string,
    status: 'Not Started' | 'In Progress' | 'Completed' | 'Ended'
    time_started: string
    time_ended: string | null
    exercise_list: SessionMuscleGroup[]
}

export interface SessionMuscleGroup{
    main_muscle_id: string
    main_muscle_group: string
    exercises: SessionExercise[]
}

export interface SessionExercise {
    session_exercise_id: string

    sub_muscle_id: string
    sub_muscle_name: string

    exercise_id: string
    exercise_name: string

    sets: WorkoutSet[]
}

export interface WorkoutSet {
    set_id: string
    set_number: number
    weight: number
    reps: number
    rest_time: number
    tempo: 'Normal' | 'Slow'
    note: string | null
    created_at: string
}