import Team from './Team'

interface MatchInterface{
    team_1: string,
    team_1_goals: number | null,
    team_2: string,
    team_2_goals: number | null,
    step: string
}

// This component represents a single match
const Match = (props: MatchInterface) => {

    return (
        <div className={(props.step=="groups") ? "" : "border-solid border-2 border-red-300"}>
          <Team name={props.team_1} goals={props.team_1_goals} local={true} />
          <Team name={props.team_2} goals={props.team_2_goals} local={false} />
        </div>
    )
}

export default Match