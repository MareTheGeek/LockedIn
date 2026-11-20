import '@/global.css'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { Text } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-primary p-4'>
      <Text className='text-7xl font-bold text-accent-2'>Home</Text>
      <Text className='text-7xl font-poppins text-accent-2'>Home</Text>
      <Link
        href='/Onboarding'
        className='mt-4 bg-primary text-black p-4 border-2 shadow-[-3px_3px_0px_rgba(0,0,0,1)] font-bebas-bold'
      >
        Go to Onboarding
      </Link>
      <Link
        href='/(auth)/sign-in'
        className='mt-4 bg-accent-1 text-black p-3 border-2 shadow-[-3px_3px_0px_rgba(0,0,0,1)] font-bebas-bold text-4xl text-center'
      >
        Login
      </Link>
      <Link
        href='/(auth)/sign-up'
        className='mt-4 bg-accent-3 text-black p-4 border-2 shadow-[-3px_3px_0px_rgba(0,0,0,1)]'
      >
        Sign Up
      </Link>

    </SafeAreaView>
  )
}
