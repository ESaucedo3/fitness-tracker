import { useState } from "react";
import { Workout } from "../types/Workout";

// Named Props
type WorkoutItemComponentProps = {
  workout: Workout
}

export const WorkoutItem = ({ workout }: WorkoutItemComponentProps) => {
  const [durationValue, setDuration] = useState(workout.duration);
  
  return (
    <div className='d-flex justify-content-between px-3 mb-2'>
      <div className='workout-design-1 d-flex align-items-center'>
        <p className='m-0 me-2'>{workout.icon}</p>
        <p className='m-0'>{workout.name}</p>
      </div>
      <div className='d-flex align-items-center'>
        <button onClick={() => setDuration((durationValue) => durationValue + 1)} type="button" className='btn btn-outline-light rounded-circle'>+</button>
        <p className='m-0 fs-5 mx-2'>{durationValue}</p>
        <button onClick={() => setDuration((durationValue) => durationValue <= 0 ? durationValue = 0 : durationValue - 1)} type="button" className='btn btn-outline-light rounded-circle'>-</button>
        <p className="m-0 ms-1"></p>
        <p>{workout.date?.toLocaleDateString()}</p>
      </div>
    </div>
  );
}