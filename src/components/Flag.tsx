import Flags from './Flags'

interface FlagInterface{
    country: string
}

// This component represents a single team and his score
const Flag = (props: FlagInterface) => {

    const key: keyof typeof Flags = props.country;

    return (
        <img src={Flags[props.country]} className="text-center my-auto max-h-[35px] sm:max-h-[53px]"/>
    )
}

export default Flag