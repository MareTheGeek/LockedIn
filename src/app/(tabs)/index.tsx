import '@/global.css'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import {styled} from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-primary p-5'>
      <Text className='text-xl font-bold text-accent-2'>
        Welcome to Nativewind!
      </Text>
      <Link
        href='/Onboarding'
        className='mt-4 bg-primary text-black p-4 w-100 border-2 shadow-[-3px_3px_0px_rgba(0,0,0,1)]'
      >
        Go to Onboarding
      </Link>
      <Link
        href='/(auth)/sign-in'
        className='mt-4 bg-accent-1 text-black p-4 w-100 border-2 shadow-[-3px_3px_0px_rgba(0,0,0,1)]'
      >
        Login
      </Link>
      <Link
        href='/(auth)/sign-up'
        className='mt-4 bg-accent-3 text-black p-4 w-100 border-2 shadow-[-3px_3px_0px_rgba(0,0,0,1)]'
      >
        Sign Up
      </Link>
      <Link href='/session-history/session01'>Session History</Link>
      <Link
        href={{
          pathname: '/session-history/[id]',
          params: { id: 'session01' },
        }}
      >
        Session 01
      </Link>
    </SafeAreaView>
  )
}

