import Goal from './Goal'

interface DetailsInterface{
    photo: string,
    goals: Array<{
        order: number,
        minute: number,
        author: string,
        team: number
    }>
}

// This component shows the goals of the match once you hover over it
const Details = (props: DetailsInterface) => {
console.log(props.photo)
    return (
        <div className={`overflow-hidden h-0 group-hover:h-[300px] my-1 transition-height duration-1000 ease-in-out bg-${props.photo} bg-cover`}>
            { props.goals.map( goal => <Goal key={goal.order} reverse={(goal.team==1) ? false : true} minute={goal.minute} author={goal.author} /> ) }
        </div>
    )
}

export default Details