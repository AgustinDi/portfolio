import './App.css'
import MainTitle from './cards/MainTitleCard'
import ColorSwitcher from './cards/ColorSwitcher'
import YearsOld from './cards/YearsOld'
import GithubRedirect from './cards/GithubRedirect'
import AboutMe from './cards/AboutMe'
import LinkedinRedirect from './cards/LinkedinRedirect'
import WorkingOn from './cards/WorkingOn'
import Projects from './cards/Projects'
import Technologies from './cards/technologies'

function App() {

  return (
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
    </main>
  )
}

export default App
