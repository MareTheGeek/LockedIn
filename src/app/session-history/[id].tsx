import { Link, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const SessionHistoryDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
          <Text>SessionHistoryDetails: {id}</Text>
          <Link href="/">Back</Link>
    </View>
  )
}

export default SessionHistoryDetails