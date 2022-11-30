import Match from './Match'
import Connector from './Connector'

type goalData = {
    order: number,
    minute: string,
    author: string,
    team: number
}

type matchData = {
    order: number,
    team_1: string,
    team_1_goals: number | null,
    team_2: string,
    team_2_goals: number | null,
    goals: Array<goalData>,
    photo: string
}

type matchPairing = {
    match1: matchData,
    match2: matchData
}

interface PlayoffColumnInterface{
    pairs: Array<matchPairing>
}

interface PlayoffInterface{
  matches: Array<matchData>,
  inverted: boolean
}

// This component represents a column on the left side of the playoffs chart
const PlayoffColumnLeft = (props: PlayoffColumnInterface) => {

  return <>
              { props.pairs.map( pair => 
                  <div className='flex' key={`${pair.match1.order}-${pair.match2.order}`}>
                    <div className='grow'>
                      <Match key={pair.match1.order} 
                        team_1={pair.match1.team_1}
                        team_1_goals={pair.match1.team_1_goals}
                        team_2={pair.match1.team_2}
                        team_2_goals={pair.match1.team_2_goals}
                        photo={pair.match1.photo}
                        goals={pair.match1.goals}
                        inline={false}
                        inverted={false}
                        />
                      <Match key={pair.match2.order} 
                        team_1={pair.match2.team_1}
                        team_1_goals={pair.match2.team_1_goals}
                        team_2={pair.match2.team_2}
                        team_2_goals={pair.match2.team_2_goals}
                        photo={pair.match2.photo}
                        goals={pair.match2.goals}
                        inline={false}
                        inverted={false}
                        />
                    </div>
                    <Connector inverted={false} double={true}/>
                  </div> 
                  ) }
        </>
}

// This component represents a column on the right side of the playoffs chart
const PlayoffColumnRight = (props: PlayoffColumnInterface) => {

  return <>
              { props.matches.map( match => 
                  <div className='flex' key={match.order}>
                    { (match.order % 2 === 0) ? <Connector upper={false} left={false}/> : <Connector upper={true} left={false}/> }
                    <div className='grow'>
                      <Match key={match.order} 
                        team_1={match.team_1}
                        team_1_goals={match.team_1_goals}
                        team_2={match.team_2}
                        team_2_goals={match.team_2_goals}
                        photo={match.photo}
                        goals={match.goals}
                        inline={false}
                        inverted={false}
                        />
                    </div>
                  </div> 
                  ) }
        </>
}

const PlayoffColumn = (props: PlayoffInterface) => {

    // Pairing matches in groups of 2
    let pairs: Array<matchPairing> = []
    props.matches.map( (match, i, arr) => (i%2 === 0) ?  pairs.push({match1: match, match2: arr[i+1]}) : null )
    
    return <div className='min-w-[400px]'>
            { (props.inverted === true)
                  ? <PlayoffColumnRight pairs={pairs} />
                  : <PlayoffColumnLeft pairs={pairs} />
            }
            </div>
}

export default PlayoffColumn