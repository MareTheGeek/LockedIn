import { icons } from '@/constants/icons'
import { mockMuscleGroup } from '@/src/data/mockExerciseData'
import { MuscleName } from '@/src/types/exercise'
import { Image } from 'expo-image'
import { useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import MuscleSubMuscle from '../buttons/MuscleSubMuscle'

const AddWorkout = () => {
  const mainMuscleGroup = mockMuscleGroup.map((muscle) => {
    const muscleName = muscle.name as MuscleName
    const muscleId = muscle.id
    return { muscleId, muscleName }
  })

  const [expandedMuscleGroup, setExpandedMuscleGroup] = useState<boolean>(false)
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleName | null>(null)

  const expandMuscle = () => setExpandedMuscleGroup((prev) => !prev)

  return (
    <View className='p-4 border-[2px] bg-primary'>
      <TouchableOpacity className='mb-4 items-end'>
        <Image
          source={icons.close}
          contentFit='contain'
          style={{ width: 32, height: 32 }}
        />
      </TouchableOpacity>

      {/* Muscle group dropdown */}
      <View className='mb-4'>
        <Text className='font-poppins-medium mb-2 text-xl tracking-tight'>
          Muscle Group
        </Text>
        <View>
          <Pressable
            className={`${selectedMuscle ? 'bg-accent-1' : 'bg-primary'} p-4 border-[2px] shadow-[-3px_3px_0px_rgba(0,0,0,1)] flex-row items-center justify-between rounded-[2px] active:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-all h-14`}
            onPress={expandMuscle}
          >
            <Text
              className={`${selectedMuscle ? 'font-bebas-bold text-4xl leading-[0]' : 'font-poppins-medium text-xl tracking-tight'}`}
            >
              {selectedMuscle ? selectedMuscle : 'Select Muscle Group'}
            </Text>

            <Image
              source={icons.arrowDown}
              contentFit='contain'
              style={{ width: 18, height: 18 }}
            />
          </Pressable>

          {/* Expanded */}
          <View
            className={`${expandedMuscleGroup ? 'h-[280px] opacity-100' : 'h-0 opacity-0'} border-[2px] border-t-0 z-10 absolute bg-primary w-full rounded-[2px] top-[54px] transition-all duration-300 ease-in-out `}
          >
            {expandedMuscleGroup && (
              <View className='flex-row flex-wrap gap-2 p-4'>
                {mainMuscleGroup.map((muscle) => (
                  <MuscleSubMuscle
                    key={muscle.muscleId}
                    id={muscle.muscleId}
                    name={muscle.muscleName}
                    expanded={expandedMuscleGroup}
                    selectedMuscle={selectedMuscle}
                    onPress={() => {
                      setSelectedMuscle(muscle.muscleName)
                      setExpandedMuscleGroup(false)
                    }}
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Selected Exercise tags */}
      <View className='mb-4'>
        <Text className='font-poppins-medium mb-2 text-xl tracking-tight'>
          Exercises
        </Text>
        <View className='p-4 border-2 border-disabled-1'>
          <Text className='font-poppins-medium text-xl tracking-tight text-disabled-1 rounded-[2px]'>
            Selected Exercise
          </Text>
        </View>
      </View>

      {/* Submuscle dropdown */}
      <View className='mb-4'>
        <Text className='font-poppins-medium mb-2 text-xl tracking-tight text-disabled-1'>
          Sub Muscle
        </Text>
        <Pressable className='p-4 border-[2px] border-disabled-1 shadow-[-3px_3px_0px_rgba(128,128,128,1)] flex-row items-center justify-between rounded-[2px] active:shadow-[0px_0px_0px_rgba(128,128,128,1)] transition-all'>
          <Text className='font-poppins-medium text-xl text-disabled-1 tracking-tight'>
            Filter by Sub Muscle
          </Text>

          <Image
            source={icons.arrowDownDisabled}
            contentFit='contain'
            style={{ width: 18, height: 18 }}
          />
        </Pressable>
      </View>

      {/* Exercise List */}
      <View className='mb-4 p-4 border-2 border-disabled-1'>
        <Text className='min-h-30 font-poppins-medium text-xl tracking-tight text-disabled-1 rounded-[2px]'>
          Muscle Group Exercise List
        </Text>
      </View>

      {/* // Reset / Enter buttons */}
      <View className='flex-row'>
        <Pressable className='border-[2px] border-secondary h-14 justify-center mr-4 w-[33%]'>
          <Text className='font-bebas-bold text-3xl text-center'>Reset</Text>
        </Pressable>
        <Pressable className='flex-1 h-14 border-[2px] border-disabled-1 justify-center shadow-[-3px_3px_0px_rgba(128,128,128,1)] active:shadow-[0px_0px_0px_rgba(128,128,128,1)] transition-all'>
          <Text className='font-bebas-bold text-3xl text-center text-disabled-1'>
            Enter
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default AddWorkout
