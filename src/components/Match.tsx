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
    inline: boolean,
    inverted?: boolean
}

const MatchInline = (props: MatchInterface) => {

    return <div className="flex">
            <Team name={props.team_1} goals={props.team_1_goals} reverse={false} oneline={true}/>
            <Team name={props.team_2} goals={props.team_2_goals} reverse={true} oneline={true}/>
           </div>
}

const MatchLeft = (props: MatchInterface) => {

    return <div className="flex flex-col border-solid border-2 border-red-300 h-28">
            <div className='h-3'></div>
            <Team name={props.team_1} goals={props.team_1_goals} reverse={false} oneline={false}/>
            <div className='grow'></div>
            <Team name={props.team_2} goals={props.team_2_goals} reverse={false} oneline={false}/>
            <div className='h-3'></div>
           </div>
}

const MatchRight = (props: MatchInterface) => {

    return <div className="flex flex-col border-solid border-2 border-red-300 h-28">
            <div className='h-3'></div>
            <Team name={props.team_1} goals={props.team_1_goals} reverse={true} oneline={false}/>
            <div className='grow'></div>
            <Team name={props.team_2} goals={props.team_2_goals} reverse={true} oneline={false}/>
            <div className='h-3'></div>
           </div>
}

// This component represents a single match
const Match = (props: MatchInterface) => {

    return (
        <div className="group">
            { (props.inline === true)
                ? <MatchInline {...props}/>
                : (props.inverted === true) ? <MatchRight {...props}/> : <MatchLeft {...props}/>
            }    
            <Details photo={props.photo} goals={props.goals} />
        </div>
    )
}

export default Match