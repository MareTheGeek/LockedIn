import type { ImageSourcePropType } from 'react-native'

declare global {
  interface TabIconProps {
    focused: boolean
    icon: NonNullable<import('expo-image').ImageProps['source']>
  }
}
