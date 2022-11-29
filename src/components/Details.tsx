import Goal from './Goal'

interface DetailsInterface{
    photo: string,
    goals: Array<{
        order: number,
        minute: string,
        author: string,
        team: number
    }>
}

// This component shows the goals of the match once you hover over it
const Details = (props: DetailsInterface) => {
console.log(props.photo)
    return (
        <div className={`overflow-hidden h-0 group-hover:h-[250px] group-hover:sm:h-[300px] transition-height duration-1000 ease-in-out bg-cover`} style={{ backgroundImage: `url("${props.photo}")` }}>
            { props.goals.map( goal => <Goal key={goal.order} reverse={(goal.team==1) ? false : true} minute={goal.minute} author={goal.author} /> ) }
        </div>
    )
}

export default Details