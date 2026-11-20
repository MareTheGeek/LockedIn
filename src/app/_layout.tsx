import '@/global.css'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Stack } from 'expo-router'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export const unstable_settings = {
  anchor: '(tabs)',
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // Poppins
    'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'poppins-medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'poppins-semiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-extraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'poppins-light': require('../../assets/fonts/Poppins-Light.ttf'),
    // Bebas
    'bebas-regular': require('../../assets/fonts/BebasNeue-Regular.ttf'),
    'bebas-bold': require('../../assets/fonts/BebasNeue-Bold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (fontError) throw fontError
  if (!fontsLoaded) return null

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
    </Stack>
  )
}
