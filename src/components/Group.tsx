import Match from './Match'

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

interface GroupInterface{
    name: string,
    matches: Array<matchData>
}

// This component represents a single group
const Group = (props: GroupInterface) => {

    return (
      <div className="inline-block my-3 sm:m-4 p-0.5 sm:p-1 min-w-full sm:min-w-[550px] bg-slate-900/75 text-center text-white font-sans text-md 2xl:text-xl border-solid border-2 border-gray-300 rounded-2xl sm:rounded-3xl">
          <p>{props.name}</p>
          <hr className="my-2 border-gray-300 "></hr>
          <div>
            { props.matches.map( match => <Match key={match.order+props.name} 
                                                 team_1={match.team_1}
                                                 team_1_goals={match.team_1_goals}
                                                 team_2={match.team_2}
                                                 team_2_goals={match.team_2_goals}
                                                 photo={match.photo}
                                                 goals={match.goals}
                                                 inline={true}
                                                 floatingDetails={false} /> ) }
          </div>
      </div>
    )
}

export default Group