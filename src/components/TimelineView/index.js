import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  getChronoData = () => {
    const {timelineItemsList} = this.props
    const items = timelineItemsList.map(eachObject => {
      return {
        title: eachObject.title,
        cardTitle:
          eachObject.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={eachObject.id} courseData={eachObject} />
          ) : (
            <ProjectTimelineCard key={eachObject.id} projectData={eachObject} />
          ),
      }
    })

    return <Chrono mode="VERTICAL" items={items} />
  }

  render() {
    return (
      <div className="bgTimeLineCont">
        <h1 className="timeLineHead"> MY JOURNEY OF CCBP 4.0</h1>
        <div className="chronoCont">{this.getChronoData()}</div>
      </div>
    )
  }
}
export default TimelineView
