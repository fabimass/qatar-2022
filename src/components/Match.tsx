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
//transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32
// -transparent absolute -translate-y-full scale-y-0 px-4 py-3 opacity-0 transition-all duration-200
// h-0 group-hover:h-fit transition-height duration-500 ease-in-out 
return (
        <div className="group">
        <div className={(props.step=="groups") ? "flex" : "border-solid border-2 border-red-300"}>
          <Team name={props.team_1} goals={props.team_1_goals} reverse={false} />
          <Team name={props.team_2} goals={props.team_2_goals} reverse={true} />
          </div>
          <div className="overflow-hidden h-0 group-hover:h-[100px] transition-height duration-1000 ease-in-out">
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p></div>
        </div>
    )
}

export default Match