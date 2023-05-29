import React from 'react';
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      {/* Vertical Timeline */}
      <VerticalTimeline lineColor='#3e497e'>


        {/* Vertical Timeline Element */}
        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2012 - 2014"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<SchoolIcon />}
        >
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
            Kendriya Vidyalaya Number - 2 , Patiala , Punjab
          </h3>
          <p> 10Th and 12Th</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<SchoolIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           CCET - Chandigarh college of Engineering  and Technology
          </h3>
          <h4 className="verticle-timeline-element-subtitle">Bachelor's Degree </h4>
          <p>Computer Science and Engineering</p>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           Busy  in Studies and Skilling and FreeLance Apart From Computer science 
          </h3>
          <h4 className="verticle-timeline-element-subtitle"> Various Social Media work  </h4>
          <p> Made Youtube Channel completely Monetised </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           Front-Developement in React 
          </h3>
          <h4 className="verticle-timeline-element-subtitle">Porject Number 1  </h4>
          <p>Explanation of The ProJect Number 1 </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           Front-Developement in React 
          </h3>
          <h4 className="verticle-timeline-element-subtitle">Porject Number 2  </h4>
          <p>Explanation of The ProJect Number 2 </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           Front-Developement in React 
          </h3>
          <h4 className="verticle-timeline-element-subtitle">Porject Number 3  </h4>
          <p>Explanation of The ProJect Number 3 </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
