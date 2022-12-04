import Flags from '../assets/Flags'
import { TeamProps } from '../assets/Interfaces'

// This component represents a single team and his score
const Flag = (props: TeamProps) => {

    return (
        <img src={Flags[props.name as keyof typeof Flags]} className="text-center my-auto max-h-[35px] sm:max-h-[53px]"/>
    )
}

export default Flag