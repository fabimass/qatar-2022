import Team from './Team'
import Details from './Details'

interface MatchInterface{
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
    photo: string,
    aligned: string
}

// This component represents a single match
const Match = (props: MatchInterface) => {

    let block: JSX.Element = <div></div>

    switch(props.aligned){
        case "horizontal":
            block = (<div className="flex">
                        <Team name={props.team_1} goals={props.team_1_goals} reverse={false} oneline={true}/>
                        <Team name={props.team_2} goals={props.team_2_goals} reverse={true} oneline={true}/>
                    </div>)
            break
        case "vertical-left":
            block = (<div className="border-solid border-2 border-red-300">
                        <Team name={props.team_1} goals={props.team_1_goals} reverse={false} oneline={false}/>
                        <Team name={props.team_2} goals={props.team_2_goals} reverse={false} oneline={false}/>
                    </div>)
            break
        case "vertical-right":
            block = (<div className="border-solid border-2 border-red-300">
                        <Team name={props.team_1} goals={props.team_1_goals} reverse={true} oneline={false}/>
                        <Team name={props.team_2} goals={props.team_2_goals} reverse={true} oneline={false}/>
                    </div>)
            break
        default:
            block = <div>WRONG ALIGNMENT</div>
    }

    return (
        <div className="group">
            {block}    
            <Details photo={props.photo} goals={props.goals} />
        </div>
    )
}

export default Match