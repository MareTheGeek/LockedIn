import { tabs } from '@/constants/data'
import { icons } from '@/constants/icons'
import { colors, components } from '@/constants/theme'
import { Image } from 'expo-image'
import { Tabs } from 'expo-router'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const tabBar = components.tabBar

const TabLayout = () => {
  const insets = useSafeAreaInsets()
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className='tabs-icon'>
        <View className='tabs-pill'>
          <Image
            source={icon}
            contentFit='contain'
            style={
              icon === icons.notFocused.startSession
                ? { width: 50, height: 50 }
                : { width: 24, height: 24 }
            }
          />
        </View>
      </View>
    )
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          // bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          paddingHorizontal: tabBar.horizontalInset,
          // marginHorizontal: tabBar.horizontalInset,
          // borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          // display: 'none'
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: 'center',
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                icon={focused ? tab.iconFocused : tab.iconNotFocused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabLayout
