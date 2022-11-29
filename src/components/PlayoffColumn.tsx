import Match from './Match'
import Connector from './Connector'

interface PlayoffColumnInterface{
    matches: Array<{
        order: number,
        team_1: string,
        team_1_goals: number | null,
        team_2: string,
        team_2_goals: number | null,
        goals: Array<{
          order: number,
          minute: string,
          author: string,
          team: number
        }>,
        photo: string
      }>,
    aligned: string
}

// This component represents a column on the left side of the playoffs chart
const PlayoffColumnLeft = (props: PlayoffColumnInterface) => {

  return <>
              { props.matches.map( match => <div className='flex'>
                    <div className='grow'>
                      <Match key={match.order} 
                        team_1={match.team_1}
                        team_1_goals={match.team_1_goals}
                        team_2={match.team_2}
                        team_2_goals={match.team_2_goals}
                        photo={match.photo}
                        goals={match.goals}
                        aligned={props.aligned}
                        />
                    </div>
                    { (match.order % 2 === 0) ? <Connector upper={false} left={true}/> : <Connector upper={true} left={true}/> }
                  </div> ) }
        </>
}

// This component represents a column on the right side of the playoffs chart
const PlayoffColumnRight = (props: PlayoffColumnInterface) => {

  return <>
              { props.matches.map( match => <div className='flex'>
                    { (match.order % 2 === 0) ? <Connector upper={false} left={false}/> : <Connector upper={true} left={false}/> }
                    <div className='grow'>
                      <Match key={match.order} 
                        team_1={match.team_1}
                        team_1_goals={match.team_1_goals}
                        team_2={match.team_2}
                        team_2_goals={match.team_2_goals}
                        photo={match.photo}
                        goals={match.goals}
                        aligned={props.aligned}
                        />
                    </div>
                  </div> ) }
        </>
}

const PlayoffColumn = (props: PlayoffColumnInterface) => {

    return <div className='min-w-[400px]'>
            { (props.aligned === 'vertical-left')
                  ? <PlayoffColumnLeft {...props} />
                  : <PlayoffColumnRight {...props} />
            }
            </div>
}

export default PlayoffColumn