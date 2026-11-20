import MainButton from '@/src/components/buttons/MainButton'
import AddWorkout from '@/src/components/modal/AddWorkout'
import SessionSettings from '@/src/components/modal/SessionSettings'
import SessionStatusIsland from '@/src/components/session/SessionStatusIsland'
import { styled } from 'nativewind'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'


const SafeAreaView = styled(RNSafeAreaView)

const StartSession = () => {
  const clicky = () => {
    console.log('add workout')
  }
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const openModal = () => setModalOpen((prev) => !prev)
  return (
    <SafeAreaView className='flex-1 bg-primary p-4'>
      {/* disabled background */}
      <Pressable
        className={`${modalOpen ? 'opacity-50' : 'opacity-0'} screen-disabled`}
        onPress={openModal}
      ></Pressable>

      {/* Session Settings Modal */}
      <View
        className={`${modalOpen ? 'translate-y-0' : 'translate-y-90'} z-20 absolute right-0 bottom-8 left-0 p-4 transition-transform duration-300 ease-in-out`}
      >
        <SessionSettings modalOpen={modalOpen} setModalOpen={openModal} />
      </View>

      {/* Add Workout Modal */}
      <View className='absolute inset-0 z-30 justify-center px-4'>
        <AddWorkout />
      </View>

      {/* Session Island */}
      <SessionStatusIsland modalOpen={modalOpen} setModalOpen={openModal} />

      {/* Add Workout Button */}
      <Pressable className='add-workout-btn' onPress={clicky}>
        <Text className='add-workout-btn-text'>+ADD WORKOUT</Text>
      </Pressable>

      {/* Start Workout Button */}
      <View className='mt-auto'>
        <MainButton />
      </View>
    </SafeAreaView>
  )
}

export default StartSession
