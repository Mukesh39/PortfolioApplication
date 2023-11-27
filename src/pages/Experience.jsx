import React from 'react';
import { VerticalTimelineElement, VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css'

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
            Kendriya Vidyalaya No-2 , Patiala , Punjab
          </h3>
          <p> 10th and 12th </p>
          <p>Patiala , Punjab , India </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: '#fff' }}
          icon={<SchoolIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           CCET - Chandigarh College of Engineering  and Technology
          </h3>
          <h4 className="verticle-timeline-element-subtitle">BE</h4>
          <p>Computer Science and Engineering</p>
          <p>Chandigarh , India </p>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           Freelance
           </h3>
          <h4 className="verticle-timeline-element-subtitle"> Freelance and Completed Bootcamp Web dev</h4>
          <p>Busy is studies and freelance in social media and my love and Enthusiasm attracted to learn the technology used behind these great Social media aaps , Web aaps - In Web Development 
          ,Learnt and done rigorous training more than 6 months under great Mentors , ReactJs and Build Industrial Level web aaps from scratch.  - Now ready to contribute with 1 Year of Experience</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           Front-End Developement in React - Project no.1 
          </h3>
          <h4 className="verticle-timeline-element-subtitle">Project Imdb clone  </h4>
          <p> Description : User-friendly interface that mimics the popular IMDb website based on ReactJs.</p>
          <p> Features : Fetch movie data from the TMDb API and dynamically render it on the page , Displaying movie listings, movie details, ratings, search functionality and More. </p>
          <p> Tech used : HTML , CSS3 , ReactJs and JavaScript , Tailwind CSS , TMDB Api. </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
          Front-End Developement in React - Project no.2
          </h3>
          <h4 className="verticle-timeline-element-subtitle">EasyShop - Ecommerce Application</h4>
          <p>Description : ecommerce application based on React , Redux that gives facility to shop online.  </p>
          <p> Features : Includes features of Selection ,View ,Cart summary and Payment details & Coupon discounts.     </p>   
          <p>Database : Sample data given , Can be scaled  using data Provided by External API . </p>  
          <p>Tech used : HTML, CSS3 , JavaScript , ReactJs , Redux and Material UI </p>                                                                               
                                              
                                                                                                 
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
          Front-End Developement in React - Project no.3
          </h3>
          <h4 className="verticle-timeline-element-subtitle"> Portfolio application </h4>
          <p>Description : Front-End Portfolio application based on React used for Showcasing the Profile and Skills.  </p>
          <p> Features : Pages - skills , Experience , Resume Download , Project section showcased together at one place </p>     
          <p>Tech used : HTML, CSS3 , JavaScript , ReactJs , Vertical components , Responsive Design </p>                                                                               
                                              
                                                                                                 
        </VerticalTimelineElement>


      


        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
           MINOR PROJECTS
          </h3>
          <h4 className="verticle-timeline-element-subtitle">Image Gallery App - Infinite Image Scroll web App</h4>
          <p>Description : Endless captivating images for seamless browsing, providing constant inspiration and visual delight.</p>
          <p>Features : Fetching data From API and Showing In app, Infinite Scroll and Nice UI.</p>


          <h4 className="verticle-timeline-element-subtitle">Weather application</h4>
          <p>Description : Fetches accurate weather information based on user search using the OpenWeather API.</p>
          <p>Features : Fetching Real Time Data from Api , Displays temperature, humidity, and wind speed conditions for the searched location.</p>


          <h4 className="verticle-timeline-element-subtitle">QrcodeGenerator</h4>
          <p>Description: Application allows users to generate customized QR codes, download them, and adjust their size.</p>
          <p>Features : Generate QR codes for various types of data, including URLs, text, email addresses, phone numbers, and more. </p>

          
        </VerticalTimelineElement>




        <VerticalTimelineElement
          className="verticle-timeline-element--education"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: '#fff' }}
          icon={<WorkIcon />}>
          {/* Content of Vertical Timeline Element */}
          <h3 className="verticle-timeline-element-title">
          Project Running </h3>
          <h4 className="verticle-timeline-element-subtitle">Working on New Project Based on MERN (Fullstack)</h4>
          <p> </p>                                                                                    
        </VerticalTimelineElement>

      </VerticalTimeline>
      <div className="experience-Certified">
      {/*  here paste all the certificates for achievemnets */}
      </div>
    </div>
  );
}

export default Experience;
