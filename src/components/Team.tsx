import Score from "./Score"

interface TeamInterface{
    name: string,
    goals: number | null,
    local: boolean
}

// This component represents a single team and his score
const Team = (props: TeamInterface) => {

    return (
        <div className="border-solid border-2 border-red-300 flex">
          <div>{props.name}</div>
          <Score goals={props.goals} />
        </div>
    )
}

export default Team