import Match from './Match'

interface GroupInterface{
    name: string,
    matches : Array<{
        number: number,
        team_1: string,
        team_1_goals: number | null,
        team_2: string,
        team_2_goals: number | null
      }>
}

// This component represents a single group
const Group = (props: GroupInterface) => {

    return (
        <div className="inline-block m-0.5 sm:m-4 p-0.5 sm:p-1 min-w-full sm:min-w-[500px] bg-slate-900/95 text-center text-white font-sans border-solid border-2 border-gray-300 rounded-2xl sm:rounded-3xl">
          <p>Group {props.name}</p>
          <hr className="my-2 border-gray-300 "></hr>
          <div>
            { props.matches.map( match => <Match key={match.number} 
                                                 team_1={match.team_1}
                                                 team_1_goals={match.team_1_goals}
                                                 team_2={match.team_2}
                                                 team_2_goals={match.team_2_goals}
                                                 step={"groups"} /> ) }
          </div>
        </div>
    )
}

export default Group