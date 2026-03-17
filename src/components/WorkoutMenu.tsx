import React from 'react'
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native'

type Props = {
  visible: boolean
  onClose: () => void
  onFinish: () => void
  onSkipRest: () => void
}

export default function WorkoutMenu({ visible, onClose, onFinish, onSkipRest }: Props) {
  return (
    <Modal visible={visible} transparent animationType='fade'>
      {/* Tap outside to dismiss */}
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.menuContainer}>
          <Pressable
            style={styles.menuItem}
            onPress={() => {
              onSkipRest()
              onClose()
            }}
          >
            <Text style={styles.finishText}>Skip Rest</Text>
          </Pressable>

          <Pressable
            style={styles.menuItem2}
            onPress={() => {
              onFinish()
              onClose()
            }}
          >
            <Text style={styles.finishText}>Finish Workout</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 70,
    paddingTop: 90,
    paddingRight: 24,
    backgroundColor: 'rbga(0,0,0,0.2)',
  },
  menuContainer: {
    backgroundColor: '#000000c9',
    borderRadius: 12,
    padding: 10,
    minWidth: 180,
    elevation: 5,
  },
  menuItem: {
    backgroundColor: '#807e7e',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  menuItem2: {
    backgroundColor: '#E53935',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 8,
  },

  finishText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
})
