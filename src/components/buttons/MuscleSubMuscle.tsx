import { MainMuscleGroup } from '@/src/types/exercise'
import { Pressable, Text } from 'react-native'

const MuscleSubMuscle = ({name, onPress}:MainMuscleGroup) => {
  return (
    <Pressable className='w-[calc(50%-1.4%)] px-4 border-[2px] border-secondary h-14 justify-center rounded-[2px] bg-primary' onPress={onPress}>
      <Text className='font-bebas-bold text-3xl text-center'>{name}</Text>
    </Pressable>
  )
}

export default MuscleSubMuscle
