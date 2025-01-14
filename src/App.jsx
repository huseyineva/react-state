import Course from './components/Course/Course'
import Header from './components/Header/Header'
import { courses } from './data'
import "./main.css"

function App() {

  return (
    <>
      <Header />
      <div className="course-box">
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </>
  )
}

export default App
