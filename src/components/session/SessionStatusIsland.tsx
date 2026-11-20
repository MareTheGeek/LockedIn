import { icons } from '@/constants/icons'
import { Image } from 'expo-image'
import { Text, View, Pressable, TouchableOpacity } from 'react-native'
import { ModalProps } from '@/src/types/modal'

const SessionStatusIsland = ({modalOpen, setModalOpen}: ModalProps) => {
    const openSessionSettings = () => {
      setModalOpen(!modalOpen)
    }
  return (
    <View className='session-island'>
      <View className='session-island-header'>
        <Text className='session-island-header-text'>Session Status</Text>
        <View className='session-island-status'>
          <Text className='session-island-status-text'>Not Started</Text>
        </View>
      </View>

      <View className='session-island-progress-bar-bg'>
        <View className='session-island-progress-bar'></View>
      </View>

      <View className='session-island-details-container'>
        <View className='session-island-details'>
          <View className='session-island-exercise-done mr-4'>
            <View className='session-island-exercise-icon'>
              <Image
                source={icons.exercise}
                contentFit='contain'
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text className='session-island-exercise-number'>0</Text>
            <Text className='session-island-exercise-label'>Exercise</Text>
          </View>

          <View className='session-island-exercise-done'>
            <View className='session-island-exercise-icon'>
              <Image
                source={icons.checkmark}
                contentFit='contain'
                style={{ width: 16, height: 20 }}
              />
            </View>
            <Text className='session-island-exercise-number'>0</Text>
            <Text className='session-island-exercise-label'>Done</Text>
          </View>
        </View>

        <TouchableOpacity
          className='session-island-settings'
          onPress={openSessionSettings}
        >
          <Image
            source={icons.settings}
            contentFit='contain'
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SessionStatusIsland
