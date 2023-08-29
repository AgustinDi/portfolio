import './Cards Styles/MainTitleCard.css'

export default function MainTitle() {
     return (
          <div className='MainTitle'>
               <img src='/me.png' className='MainTitle_Image' />
               <div className='MainTitle_InfoContainer'>
                    <h1>Agustin Di giacinto</h1>
                    <h3>Fullstack Developer</h3>
               </div>
          </div>
     )
}
