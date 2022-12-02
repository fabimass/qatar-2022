import Goal from './Goal'

interface DetailsInterface{
    photo: string,
    goals: Array<{
        order: number,
        minute: string,
        author: string,
        team: number
    }>,
    floating: boolean,
    inverted?: boolean
}

// This component shows the goals of the match once you hover over it
const Details = (props: DetailsInterface) => {

    return (
        <div className={(props.floating === true) 
              ? (props.inverted === true) ? "right-[0px] absolute z-10 mt-[2px] h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300" 
                                          : "left-[0px] absolute z-10 mt-[2px] h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300"
              : "overflow-hidden h-0 group-hover:h-[250px] group-hover:sm:h-[300px] transition-height duration-1000 ease-in-out bg-cover" } style={{ backgroundImage: `url("${props.photo}")` }}>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-1000 ease-in-out'>
                    { props.goals.map( goal => <Goal key={goal.order} reverse={(goal.team==1) ? false : true} minute={goal.minute} author={goal.author} /> ) }
            </div>
        </div>
    
        
    )
}

export default Details