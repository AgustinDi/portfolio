import './App.css'
import './NoSignal.css'
import MainTitle from './cards/MainTitleCard'
import ColorSwitcher from './cards/ColorSwitcher'
import YearsOld from './cards/YearsOld'
import GithubRedirect from './cards/GithubRedirect'
import AboutMe from './cards/AboutMe'
import LinkedinRedirect from './cards/LinkedinRedirect'
import WorkingOn from './cards/WorkingOn'
import Projects from './cards/Projects'
import Technologies from './cards/technologies'
import Curriculum from './cards/Curriculum'
import ContactMe from './cards/ContactMe'

function App() {

  return (
    <>
      <div className='NoSignal' />
      <main className='main-grid'>
        <ColorSwitcher />
        <YearsOld />
        <MainTitle />
        <GithubRedirect />
        <AboutMe />
        <LinkedinRedirect />
        <WorkingOn />
        <Projects />
        <Technologies />
        <Curriculum />
        <ContactMe />
      </main>
    </>
  )
}

export default App
