import { useState } from "react"
import { SCHEMES, WORKOUTS } from "../utils/workouts"
import SectionWrapper from "./SectionWrapper"

function Header({ index, title, description }) {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex items-center justify-center gap-4">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">{index}</p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h1>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}

export default function Generator() {
  const [showModal, setShowModal] = useState(false)
  const [workoutType, setWorkoutType] = useState('individual')
  const [muscleGroup, setMuscleGroup] = useState([])
  const [goals, setGoals] = useState('strength_power')

  function toggleModal() {
    setShowModal(!showModal)
  }

  return (
    <SectionWrapper
        header={"generate your workout"}
        title={['Conquer', 'your', 'limits']}
    >
        <Header
            index={'01'}
            title={'Push yourself'}
            description={'Choose your workout split'}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.keys(WORKOUTS).map((type, index) => {
                return (
                    <button 
                        key={index} 
                        className="bg-slate-950 border border-blue-400 py-3 rounded-lg"
                    >
                        <p className="capitalize">{type.replaceAll('_', " ")}</p>
                    </button>
                )
            })}
        </div>
        <Header
            index={'02'}
            title={'Targeting muscle groups'}
            description={'Select the muscles you wish to train'}
        />
        <div className="bg-slate-950 py-3 border border-solid 
        border-blue-400 rounded-lg flex flex-col">
            <button onClick={toggleModal} className="relative flex items-center justify-center">
                <p>Select muscle groups</p>
                <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
            </button>
            {showModal && (
                <div>modal</div>
            )}
        </div>
        <Header
            index={'03'}
            title={'Identify your goal'}
            description={'Select your pefered workout type'}
        />
        <div className="grid grid-cols-3 gap-4">
            {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                return (
                    <button 
                        key={schemeIndex} 
                        className="bg-slate-950 border border-blue-400 py-3 rounded-lg"
                    >
                        <p className="capitalize">{scheme.replaceAll('_', " ")}</p>
                    </button>
                )
            })}
        </div>
    </SectionWrapper>
  )
}
