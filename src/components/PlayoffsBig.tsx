
import Fixture from './Fixture'

// This component will manage the playoffs for big screens
const PlayoffsBig = () => {

    return (
        <div>
            { Fixture.groups.map( group => <Group key={group.name} name={group.name} matches={group.matches} /> ) }
        </div>
    )
}

export default PlayoffsBig