/* eslint-disable react/no-unknown-property */
import './Cards Styles/Curriculum.css'

export default function Curriculum() {
     return (
          <a href='https://www.linkedin.com/in/agustin-digiacinto/overlay/1635502083443/single-media-viewer/?profileId=ACoAADbea4gBRvhAlPrYNncXsqiaLFPTOHRhEm8' target='_Blank' className='Curriculum clickeable' rel="noreferrer">
               <marquee className='Curriculum_marquee_father' behavior='alternate' scrollamount='10' direction='down'>
                    <marquee className='Curriculum_marquee_child' behavior='alternate' scrollamount='10'>
                         <h1 className='Curriculum_bounceText'>CV</h1>
                    </marquee>
               </marquee>
          </a>
     )
}
