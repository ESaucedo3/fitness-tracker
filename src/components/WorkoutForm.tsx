import { useState } from "react"
import { Workout } from "../types/Workout";

export const WorkoutForm = ({ addWorkout }) => {
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
    date: ''
  });

  const changeHandler = (e) :void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const submitHandler = (e) :void => {
    e.preventDefault();
    addWorkout(formData);
    setFormData({ name: '', duration: '', date: '' })
  }

  return (
    <form className="row gy-1 gx-2" onSubmit={submitHandler}>
      <div className="col-md-6">
        <label className="form-label d-block">
            Workout Name
            <input 
                className="form-control"
                name="name" 
                value={formData.name} 
                onChange={changeHandler} 
                required 
            />
        </label>
      </div>
      <div className="col-md-6">
        <label className="form-label d-block">
            Duration (minutes)
            <input 
                className="form-control"
                type="number" 
                name="duration" 
                value={formData.duration} 
                onChange={changeHandler} 
                required 
            />
        </label>
      </div>
      <div className="col-12">
      <label className="form-label d-block">
          Date
          <input 
              className="form-control"
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={changeHandler} 
              required 
          />
      </label>
      </div>
      <div className="text-center">
        <button className="btn btn-outline-light rounded" type="submit">Add Workout</button>
      </div>
    </form>
  )
}