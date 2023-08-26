import './App.css'
import MainTitle from './cards/MainTitleCard'
import ColorSwitcher from './cards/ColorSwitcher'
import YearsOld from './cards/YearsOld'
import GithubRedirect from './cards/GithubRedirect'
import AboutMe from './cards/AboutMe'
import LinkedinRedirect from './cards/LinkedinRedirect'

function App() {

  return (
    <main className='main-grid'>
      <ColorSwitcher />
      <YearsOld />
      <MainTitle />
      <GithubRedirect />
      <AboutMe />
      <LinkedinRedirect />
    </main>
  )
}

export default App
