import './App.css'
import Fixture from './components/Fixture'
import Groups from './components/Groups'
import Playoffs from './components/Playoffs'

function App() {

  return (
    <>
      <Groups groups={Fixture["first-round"]}/>
      <Groups groups={Fixture["playoffs"]}/>
      <Playoffs />
    </>
  )
}

export default App
