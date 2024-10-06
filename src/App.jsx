import { useState } from 'react'
import Hero from "./components/Hero"
import Workout from "./components/Workout"
import Generator from "./components/Generator"
import { generateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [workoutType, setWorkoutType] = useState('individual')
  const [muscleGroup, setMuscleGroup] = useState([])
  const [goals, setGoals] = useState('strength_power')

  function updateWorkout() {
    if (muscleGroup.length < 1) {
      return
    }
    let newWorkout = generateWorkout(workoutType, muscleGroup, goals)
    setWorkout(newWorkout)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r
    from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator 
      workoutType={workoutType}
      setWorkoutType={setWorkoutType}
      muscleGroup={muscleGroup}
      setMuscleGroup={setMuscleGroup}
      goals={goals}
      setGoals={setGoals}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
