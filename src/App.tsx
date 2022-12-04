import './App.css'
import Fixture from './assets/Fixture'
import Groups from './components/Groups'
import Playoffs from './components/Playoffs'

function App() {

  return (
    <>
      <Groups groups={Fixture["first-round"]}/>
      <div className="block xl:hidden">
        <Groups groups={Fixture["playoffs"]}/>
      </div>
      <div className="hidden xl:block">
        <Playoffs groups={Fixture["playoffs"]}/>
      </div>
    </>
  )
}

export default App
