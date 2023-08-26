import './App.css'
import MainTitle from './cards/MainTitleCard'
import ColorSwitcher from './cards/ColorSwitcher'
import YearsOld from './cards/YearsOld'
import GithubRedirect from './cards/GithubRedirect'
import AboutMe from './cards/AboutMe'

function App() {

  return (
    <main className='main-grid'>
      <ColorSwitcher />
      <YearsOld />
      <MainTitle />
      <GithubRedirect />
      <AboutMe />
      <div>
        Mas data
      </div>
      <div>
        Hi guys this is my portfolio
      </div>
      <div>
        texto generico
      </div>
      <div>
        Hi guys this is my portfolio
      </div>
      <div>
        texto generico
      </div>
      <div>
        Mas data
      </div>
      <div>
        Hi guys this is my portfolio
      </div>
      <div>
        texto generico
      </div>
      <div>
        Mas data
      </div>
    </main>
  )
}

export default App
