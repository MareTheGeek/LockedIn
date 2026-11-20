import { icons } from '@/constants/icons'
import { Image } from 'expo-image'
import { Pressable, Text, View } from 'react-native'

const MainButton = () => {
  return (
    <Pressable className='main-button'>
      <View></View>
        <Text className='main-button-text'>Start Workout</Text>

      <View className='bg-disabled-1 w-14 h-14 items-center justify-center'>
        <Image
          source={icons.buttonGo}
          contentFit='contain'
          style={{ width: 24, height: 24 }}
        />
      </View>
    </Pressable>
  )
}

export default MainButton
