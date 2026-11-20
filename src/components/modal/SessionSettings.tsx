import { icons } from '@/constants/icons'
import { ModalProps } from '@/src/types/modal'
import { Image } from 'expo-image'
import { Text, TouchableOpacity, Pressable, View } from 'react-native'

const SessionSettings = ({modalOpen, setModalOpen}: ModalProps) => {
  const clicky = () => {
    console.log('hello')
  }
      const openSessionSettings = () => {
        setModalOpen(!modalOpen)
      }

  return (
    <View className='p-4 border-[2px] bg-primary'>
      <TouchableOpacity className='mb-4 w-[32px]' onPress={openSessionSettings}>
        <Image
          source={icons.close}
          contentFit='contain'
          style={{ width: 32, height: 32 }}
        />
      </TouchableOpacity>
      <Text className='session-settings-text'>Current Session</Text>
      <Pressable className='view-workout-btn' onPress={clicky}>
        <Text className='view-workout-text'>View Workout</Text>
      </Pressable>
      <Pressable className='end-workout-btn' onPress={clicky}>
        <Text className='end-workout-text'>End Session</Text>
      </Pressable>
    </View>
  )
}

export default SessionSettings
