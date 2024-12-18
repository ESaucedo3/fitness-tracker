import { useState } from "react";
import { Workout } from "../types/Workout";

export const WorkoutItem = ({ icon, name, duration, date }: Workout) => {
  const [durationValue, setDuration] = useState(duration);
  
  return (
    <div className='d-flex justify-content-between px-3 mb-2'>
      <div className='workout-design-1 d-flex align-items-center'>
        <p className='m-0 me-2'>{icon}</p>
        <p className='m-0'>{name}</p>
      </div>
      <div className='d-flex align-items-center'>
        <button onClick={() => setDuration((durationValue) => durationValue + 1)} type="button" className='btn btn-outline-light rounded-circle'>+</button>
        <p className='m-0 fs-5 mx-2'>{durationValue}</p>
        <button onClick={() => setDuration((durationValue) => durationValue <= 0 ? durationValue = 0 : durationValue - 1)} type="button" className='btn btn-outline-light rounded-circle'>-</button>
        <p className="m-0 ms-1"></p>
        <p>{date?.toLocaleDateString()}</p>
      </div>
    </div>
  );
}