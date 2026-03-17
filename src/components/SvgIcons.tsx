import React from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
  size?: number
  color?: string
}

// Hamburger Menu

export const MenuIcon = ({ size = 20, color = '#000' }: IconProps) => (
  <Svg width={size} height={size} viewBox='0 0 640 640' fill='none'>
    <Path
      d='M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 
        529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 
        288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 
        96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 
        462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z'
      fill={color}
    />
  </Svg>
)

// Dropdown
export const DropdownIcon = ({ size = 16, color = '#000' }: IconProps) => (
  <Svg width={size} height={size} viewBox='0 0 640 640' fill='none'>
    <Path
      d='M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 
      275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 
      160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z'
      fill={color}
    />
  </Svg>
)
