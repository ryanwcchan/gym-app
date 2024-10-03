import { WORKOUTS } from "../utils/workouts"
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
  return (
    <SectionWrapper
        header={"generate your workout"}
        title={['Conquer', 'your', 'limits']}
    >
        <Header
            index={'01'}
            title={'Push yourself'}
            description={'Select your pefered workout'}
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.keys(WORKOUTS).map((type, index) => {
                return (
                    <button key={index} className="bg-slate-950 border border-blue-400 py-4 rounded-lg">
                        <p>{type}</p>
                    </button>
                )
            })}
        </div>
    </SectionWrapper>
  )
}
