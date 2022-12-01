import Score from "./Score"
import Flag from "./Flag"

interface TeamInterface{
    name: string,
    goals: number | null,
    reverse: boolean,
    oneline: boolean
}

// This component represents a single team and his score
const Team = (props: TeamInterface) => {

    return (
      <div className={(props.oneline === true ? "flex justify-start w-1/2 cursor-default" : "flex justify-start cursor-default")}>
          {
            (props.reverse === true)
            ? 
            <>
                <Score goals={props.goals} />
                <div className="text-center font-sans text-md 2xl:text-xl my-auto grow">{props.name}</div>
                <Flag country={props.name} />
            </>   
            :
            <>
                <Flag country={props.name} />
                <div className="text-center font-sans text-md 2xl:text-xl my-auto grow">{props.name}</div>
                <Score goals={props.goals} />
            </>   
          } 
        </div>
    )
}

export default Team