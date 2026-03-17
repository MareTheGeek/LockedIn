import React from 'react'
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import { DropdownIcon } from './SvgIcons'

type Option<T> = {
  label: string
  value: T
}

type DropdownProps<T> = {
  label: string
  selectedValue: T
  options: Option<T>[]
  isOpen: boolean
  onToggle: () => void
  onSelect: (value: T) => void
}

export default function Dropdown<T>({
  label,
  selectedValue,
  options,
  isOpen,
  onToggle,
  onSelect,
}: DropdownProps<T>) {
  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label ?? ''

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Pressable style={styles.field} onPress={onToggle}>
        <Text style={styles.fieldText}>{selectedLabel}</Text>
        <View style={styles.arrow}>
          <DropdownIcon size={14} color='#000' />
        </View>
      </Pressable>

      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => String(item.value)}
            renderItem={({ item }) => (
              <Pressable
                style={styles.option}
                onPress={() => onSelect(item.value)}
              >
                <Text style={styles.optionText}>{item.label}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  label: {
    width: 120,
    fontSize: 16,
    fontWeight: '600',
    // marginBottom: 6,
  },
  field: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldText: {
    fontSize: 16,
    fontWeight: 500,
  },
  arrow: {
    marginLeft: 8,
  },
  dropdown: {
    backgroundColor: '#2E2E2E',
    opacity: 0.95,
    borderRadius: 10,
    marginTop: 6,
    maxHeight: 180,
    position: 'absolute',
    top: 40,
    left: 120,
    zIndex: 999,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  optionText: {
    color: '#FFF',
    fontSize: 15,
  },
})
