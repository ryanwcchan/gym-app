import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

export default function Workout({ workout }) {
  return (
    <SectionWrapper
        id={'workout'}
        header={"Workouts created"}
        title={['New', 'WORKOUTS', 'Below']}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
          return (
            <ExerciseCard 
              index={index}
              exercise={exercise}
              key={index}
            />
          )
        })}
      </div>
    </SectionWrapper>
  )
}
