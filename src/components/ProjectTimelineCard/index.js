import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectData

  return (
    <div className="bgProjectCont">
      <div className="projectCont">
        <img className="PImg" alt="project" src={imageUrl} />
        <div className="PHeadCont">
          <h1 className="PHead">{projectTitle}</h1>
          <div className="PDurationCont">
            <AiFillCalendar className="calendarIcon" />
            <p className="durationPara">{duration}</p>
          </div>
        </div>
        <p className="PPara">{description}</p>
        <a href={projectUrl} className="visitLink">
          Visit
        </a>
      </div>
    </div>
  )
}
export default ProjectTimelineCard
