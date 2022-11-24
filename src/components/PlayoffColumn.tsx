import Match from './Match'

interface PlayoffColumnInterface{
    matches: Array<{
        order: number,
        team_1: string,
        team_1_goals: number | null,
        team_2: string,
        team_2_goals: number | null,
        goals: Array<{
          order: number,
          minute: number,
          author: string,
          team: number
        }>,
        photo: string
      }>,
    aligned: string
}

// This component represents a column on the playoffs chart
const PlayoffColumn = (props: PlayoffColumnInterface) => {

    return (
    <div className='min-w-[200px]'>
        { props.matches.map( match => <Match key={match.order} 
            team_1={match.team_1}
            team_1_goals={match.team_1_goals}
            team_2={match.team_2}
            team_2_goals={match.team_2_goals}
            photo={match.photo}
            goals={match.goals}
            aligned={props.aligned} /> ) }
    </div>
    )
}

export default PlayoffColumn