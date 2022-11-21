
interface FlagInterface{
    country: string
}

// This component represents a single team and his score
const Flag = (props: FlagInterface) => {

    return (
        <img src={`./${props.country}.png`} className="max-h-[35px] sm:max-h-[53px]"/>
    )
}

export default Flag