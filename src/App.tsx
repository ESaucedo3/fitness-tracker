import './App.css'
import { WorkoutList } from './components/WorkoutList'

function App() {
  return (
    <>
      <section className="container w-75 p-1">
        <article className="row">
          <div className="col-md-6 mx-auto">
            <h3 className='px-3 text-center'>Workout | Time</h3>
            <hr />
            <hr />
            <WorkoutList />
          </div>
        </article>
      </section>
    </>
  )
}

export default App
