import Group from './Group'
import Fixture from './Fixture'

// This component will manage the playoffs for small screens
const PlayoffsSmall = () => {

    return (
        <div>
            { Fixture['playoffs'].map( group => <Group key={group.name} name={group.name} matches={group.matches} /> ) }
        </div>
    )
}

export default PlayoffsSmall