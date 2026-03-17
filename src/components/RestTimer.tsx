import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  duration: number
  onFinish: () => void
}

export default function RestTimer({ duration, onFinish }: Props) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish()
      return
    }
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [timeLeft])

  const progress = (duration - timeLeft) / duration

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBar}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        <Text style={styles.timerText}>{timeLeft}s</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },

  backgroundBar: {
    marginTop: 'auto',
    backgroundColor: '#6e6e6e',
    borderRadius: 12,
    marginBottom: 24,
    height: 50,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#000',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
})
