import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, duration, tagsList} = courseData

  return (
    <div className="bgCourseCont">
      <div className="courseCont">
        <div className="CHeadCont">
          <h1 className="CHead">{courseTitle}</h1>
          <div className="CDurationCont">
            <AiFillClockCircle className="clockIcon" />
            <p className="durationPara">{duration}</p>
          </div>
        </div>
        <p className="CPara">{description}</p>
        <ul className="CTagsCont">
          {tagsList.map(eachTag => (
            <li key={eachTag.id}>
              <p className="CTag">{eachTag.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CourseTimelineCard
