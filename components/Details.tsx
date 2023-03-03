import Goal from './Goal'
import { MatchProps } from '../assets/Interfaces'

// This component shows the goals of the match once you hover over it
const Details = (props: MatchProps) => {

    return (
        <div className={ (props.floatingDetails === true) 
                            ? (props.floatingDetailsDirection === "right-down") ? "left-[100%] top-[-2%] absolute z-10 h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300" 
                              : (props.floatingDetailsDirection === "left-down") ? "right-[100%] top-[-2%] absolute z-10 h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300"
                              : (props.floatingDetailsDirection === "right-up") ? "left-[100%] bottom-[-2%] absolute z-10 h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300"
                              : (props.floatingDetailsDirection === "left-up") ? "right-[100%] bottom-[-2%] absolute z-10 h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300"
                              : (props.floatingDetailsDirection === "center-down") ? "top-[100%] mx-auto left-[-50%] right-[-50%] absolute z-10 h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300"
                              : (props.floatingDetailsDirection === "center-up") ? "bottom-[100%] mx-auto left-[-50%] right-[-50%] absolute z-10 h-0 w-0 group-hover:h-[300px] group-hover:w-[550px] transition-all duration-1000 ease-in-out bg-cover border-0 group-hover:border-2 border-gray-300"
                              : ""     
                            : "overflow-hidden h-0 group-hover:h-[250px] group-hover:sm:h-[300px] transition-height duration-1000 ease-in-out bg-cover" 
                        } 
                        style={{ backgroundImage: `url("${props.photo}")` }}>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-1000 ease-in-out'>
                { props.goals.map( goal => <Goal key={goal.order} {...goal} /> ) }
            </div>
        </div>   
    )
}

export default Details