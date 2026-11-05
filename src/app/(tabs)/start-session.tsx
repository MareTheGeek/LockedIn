import { View, Text } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import {styled} from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView)

const StartSession = () => {
  return (
    <SafeAreaView className='flex-1 bg-primary p-5'>
      <Text>Start Session</Text>
    </SafeAreaView>
  )
}

export default StartSession