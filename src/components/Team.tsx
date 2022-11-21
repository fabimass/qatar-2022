import Score from "./Score"
import Flag from "./Flag"

interface TeamInterface{
    name: string,
    goals: number | null,
    reverse: boolean
}

// This component represents a single team and his score
const Team = (props: TeamInterface) => {

    return (
        <>
          {
            (props.reverse == true)
            ? <div className="flex justify-start w-1/2">
                <Score goals={props.goals} />
                <div className="text-center font-sans text-md sm:text-2xl my-auto grow">{props.name}</div>
                <Flag country={props.name} />
              </div>
            :
              <div className="flex justify-end w-1/2">
                <Flag country={props.name} />
                <div className="text-center font-sans text-md sm:text-2xl my-auto grow">{props.name}</div>
                <Score goals={props.goals} />
              </div>  
          }
          
        </>
    )
}

export default Team