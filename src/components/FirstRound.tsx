import Group from './Group'
import Fixture from './Fixture'

// This component will manage the 8 groups of the first round
const FirstRound = () => {

    return (
        <div>
            { Fixture['first-round'].map( group => <Group key={group.name} name={group.name} matches={group.matches} /> ) }
        </div>
    )
}

export default FirstRound