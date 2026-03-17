import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import Dropdown from '../components/Dropdown'
import { MenuIcon } from '../components/SvgIcons'
import WorkoutMenu from '../components/WorkoutMenu'
import RestTimer from '../components/RestTimer'

type Props = NativeStackScreenProps<RootStackParamList, 'Workout'>

export default function WorkoutScreen({ route }: Props) {
  const { muscleGroup, subMuscle, exerciseName } = route.params
  const [setNumber, setSetNumber] = useState(1)
  const [phase, setPhase] = useState<'input' | 'resting' | 'ready'>('input')

  const [currentSet, setCurrentSet] = useState({
    weight: 25,
    reps: 10,
    rest: 90,
    tempo: 'Concentric',
  })

  const [completedSets, setCompletedSets] = useState<
    {
      setNumber: number
      weight: number
      reps: number
      rest: number
      tempo: string
    }[]
  >([])

  const [menuOpen, setMenuOpen] = useState(false)

  const [openDropdown, setOpenDropdown] = useState<
    'reps' | 'rest' | 'tempo' | null
  >(null)

  const repsOptions = [
    { label: '8 (Bulk)', value: 8 },
    { label: '9 (Bulk)', value: 9 },
    { label: '10 (Balanced)', value: 10 },
    { label: '11 (Tone)', value: 11 },
    { label: '12 (Tone)', value: 12 },
  ]

  const restOptions = [
    { label: '30', value: 30 },
    { label: '60', value: 60 },
    { label: '90', value: 90 },
    { label: '120', value: 120 },
    { label: '150', value: 150 },
    { label: '180', value: 180 },
  ]

  const tempoOptions = [
    { label: 'Concentric', value: 'Concentric' },
    { label: 'Eccentric', value: 'Eccentric' },
  ]

  const handleRest = () => {
    const newSet = {
      setNumber,
      weight: currentSet.weight,
      reps: currentSet.reps,
      rest: currentSet.rest,
      tempo: currentSet.tempo,
    }
    const updatedSets = [...completedSets, newSet]
    setCompletedSets(updatedSets)
    console.log({
      muscleGroup,
      subMuscle,
      exerciseName,
      sets: updatedSets,
    })
    setPhase('resting')
  }

  const handleNextSet = () => {
    if (completedSets.length === 0) return
    const lastSet = completedSets[completedSets.length - 1]
    if (lastSet) {
      setCurrentSet({
        weight: lastSet.weight,
        reps: lastSet.reps,
        rest: lastSet.rest,
        tempo: lastSet.tempo,
      })
    }
    setSetNumber((prev) => prev + 1)
    setPhase('input')
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.setTitle}>Set {setNumber}</Text>
          <Text style={styles.exerciseTitle}>
            {subMuscle} – {exerciseName}
          </Text>
        </View>

        {/* Hamburger Menu */}
        <Pressable style={styles.menuButton} onPress={() => setMenuOpen(true)}>
          <MenuIcon size={18} color='#000' />
        </Pressable>
      </View>

      {/* Weight */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Weight (lbs)</Text>

        <View style={styles.weightContainer}>
          <Pressable
            style={styles.adjustButton}
            onPress={() => {
              setCurrentSet((prev) => {
                const newWeight = Math.max(2.5, prev.weight - 2.5)
                return { ...prev, weight: newWeight }
              })
            }}
          >
            <Text style={styles.adjustText}>-</Text>
          </Pressable>

          <View style={styles.weightDisplay}>
            <Text style={styles.weightText}>
              {currentSet.weight.toFixed(1)}
            </Text>
          </View>

          <Pressable
            style={styles.adjustButton}
            onPress={() => {
              setCurrentSet((prev) => {
                const newWeight = Math.min(500, prev.weight + 2.5)
                return { ...prev, weight: newWeight }
              })
            }}
          >
            <Text style={styles.adjustText}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Reps */}
      <Dropdown
        label='Reps'
        selectedValue={currentSet.reps}
        options={repsOptions}
        isOpen={openDropdown === 'reps'}
        onToggle={() =>
          setOpenDropdown((prev) => (prev === 'reps' ? null : 'reps'))
        }
        onSelect={(value) => {
          setCurrentSet((prev) => ({ ...prev, reps: value }))
          setOpenDropdown(null)
        }}
      />

      {/* Rest */}
      <Dropdown
        label='Rest (Secs)'
        selectedValue={currentSet.rest}
        options={restOptions}
        isOpen={openDropdown === 'rest'}
        onToggle={() =>
          setOpenDropdown((prev) => (prev === 'rest' ? null : 'rest'))
        }
        onSelect={(value) => {
          setCurrentSet((prev) => ({ ...prev, rest: value }))
          setOpenDropdown(null)
        }}
      />

      {/* Tempo */}
      <Dropdown
        label='Tempo'
        selectedValue={currentSet.tempo}
        options={tempoOptions}
        isOpen={openDropdown === 'tempo'}
        onToggle={() =>
          setOpenDropdown((prev) => (prev === 'tempo' ? null : 'tempo'))
        }
        onSelect={(value) => {
          setCurrentSet((prev) => ({ ...prev, tempo: value }))
          setOpenDropdown(null)
        }}
      />

      {/* Workout Image */}
      <Image
        source={require('../../src/assets/shoulder-frontdelts-militarypress.jpg')}
        style={styles.image}
        resizeMode='contain'
      />

      {/* Rest Button / Timer / Next Set Button */}
      {phase === 'input' && (
        <Pressable style={styles.restButton} onPress={handleRest}>
          <Text style={styles.restButtonText}>Rest</Text>
        </Pressable>
      )}

      {phase === 'resting' && (
        <RestTimer
          duration={currentSet.rest}
          onFinish={() => {
            console.log('Rest Finished')
            setPhase('ready')
          }}
        />
      )}

      {phase === 'ready' && (
        <Pressable style={styles.restButton} onPress={handleNextSet}>
          <Text style={styles.restButtonText}>Next Set (Set {setNumber + 1})</Text>
        </Pressable>
      )}

      <WorkoutMenu
        visible={menuOpen}
        onClose={() => setMenuOpen(false)}
        onFinish={() => {
          console.log('Finish Workout clicked')
        }}
        onSkipRest={() => {
          console.log('Skip Rest clicked')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  setTitle: {
    fontSize: 32,
    fontWeight: '700',
  },

  exerciseTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 4,
  },

  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    fontSize: 16,
    width: 120,
    fontWeight: '600',
  },

  weightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  adjustButton: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  adjustText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },

  weightDisplay: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  weightText: {
    fontSize: 16,
    fontWeight: '600',
  },

  image: {
    width: '100%',
    height: 300,
    marginTop: 24,
  },

  restButton: {
    marginTop: 'auto',
    backgroundColor: '#000',
    // paddingVertical: 16,
    justifyContent: 'center',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    height: 50,
  },

  restButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
})
