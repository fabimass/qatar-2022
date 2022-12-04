import Team from './Team'
import Details from './Details'
import { MatchProps } from '../assets/Interfaces'

// The local team is on the left and the away team is on the right
const MatchInline = (props: MatchProps) => {

    return (
        <div className="flex">
            <Team name={props.team_1} goals={props.team_1_goals} reverse={false} oneline={true}/>
            <Team name={props.team_2} goals={props.team_2_goals} reverse={true} oneline={true}/>
        </div>
    )
}

// The local team is above on the left and the away team below is on the left
const MatchLeft = (props: MatchProps) => {

    return (
        <div className="flex flex-col h-28">
            <div className='h-3'></div>
            <Team name={props.team_1} goals={props.team_1_goals} reverse={false} oneline={false}/>
            <div className='grow'></div>
            <Team name={props.team_2} goals={props.team_2_goals} reverse={false} oneline={false}/>
            <div className='h-3'></div>
        </div>
    )
}

// The local team is above on the right and the away team below is on the right
const MatchRight = (props: MatchProps) => {

    return (
        <div className="flex flex-col h-28">
            <div className='h-3'></div>
            <Team name={props.team_1} goals={props.team_1_goals} reverse={true} oneline={false}/>
            <div className='grow'></div>
            <Team name={props.team_2} goals={props.team_2_goals} reverse={true} oneline={false}/>
            <div className='h-3'></div>
        </div>
    )
}

// This component represents a single match
const Match = (props: MatchProps) => {

    return (
        <div className="group">
            { (props.inline === true)
                ? <MatchInline {...props}/>
                : (props.inverted === true) ? <MatchRight {...props}/> : <MatchLeft {...props}/>
            }    
            <Details {...props} />
        </div>
    )
}

export default Match