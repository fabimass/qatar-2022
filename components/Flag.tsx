import Flags from '../assets/Flags'
import { TeamProps } from '../assets/Interfaces'
import Image from 'next/image'

// This component represents a single team and his score
const Flag = (props: TeamProps) => {

    return (
        <Image src={Flags[props.name as keyof typeof Flags]} alt={`${props.name} flag`} width={46} height={46} className="text-center my-auto"/>
    )
}

export default Flag