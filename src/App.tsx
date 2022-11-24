import './App.css'
import Fixture from './components/Fixture'
import Groups from './components/Groups'
import Playoffs from './components/Playoffs'

function App() {

  return (
    <>
      <Groups groups={Fixture["first-round"]}/>
      <div className="block md:hidden">
        <Groups groups={Fixture["playoffs"]}/>
      </div>
      <div className="hidden md:block">
        <Playoffs groups={Fixture["playoffs"]}/>
      </div>
    </>
  )
}

export default App
