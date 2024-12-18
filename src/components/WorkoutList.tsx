import { useState } from "react";
import { Workout } from "../types/Workout";
import { WorkoutItem } from "./WorkoutItem";
import { WorkoutForm } from "./WorkoutForm";

export const WorkoutList = () => {
  const workoutData: Workout[] = [
    {
      icon: '🏃',
      name: "Running",
      duration: 4,
      date: new Date()
    },
    {
      icon: '🅱️',
      name: "Bench Press",
      duration: 1,
      date: new Date()
    },
    {
      icon: '🧘‍♀️',
      name: "Meditate",
      duration: 3,
      date: new Date()
    }
  ]

  const [workouts, setWorkouts] = useState<Workout[]>([...workoutData]);

  const addWorkout = (newWorkout: Workout) :void => {
    setWorkouts([...workouts, newWorkout]);
  }

  return (
    <div>
      {workouts.length === 0 ? <p className="text-center">No workouts present, create one</p> : (
        workouts.map((workout, index) => (
          <WorkoutItem key={index} {...workout} />
        ))
      )}
      <WorkoutForm addWorkout={addWorkout} />
    </div>
  )
}