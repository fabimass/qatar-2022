import Photo from './Photo'
import Goal from './Goal'

interface DetailsInterface{
    photo: string,
    goals?: Array<{
        order: number,
        minute: number,
        author: string
    }>
}

// This component shows details of the match once you hover over it
const Details = (props: DetailsInterface) => {

    return (
        <div className="overflow-hidden h-[400px] group-hover:h-[400px] transition-height duration-1000 ease-in-out py-2">
            <Goal reverse={false} minute={45} author={"Fabi"} />
            <Goal reverse={true} minute={45} author={"makelele"} />
            <Photo path={props.photo} />
        </div>
    )
}

export default Details