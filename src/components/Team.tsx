import Score from "./Score"
import Flag from "./Flag"
import { TeamProps } from '../assets/Interfaces'

// This component represents a single team and his score
const Team = (props: TeamProps) => {

    return (
      <div className={(props.oneline === true ? "flex justify-start w-1/2 cursor-default" : "flex justify-start cursor-default")}>
          {
            (props.reverse === true)
            ? 
            <>
                <Score {...props} />
                <div className="text-center my-auto grow">{props.name}</div>
                <Flag {...props} />
            </>   
            :
            <>
                <Flag {...props} />
                <div className="text-center my-auto grow">{props.name}</div>
                <Score {...props} />
            </>   
          } 
        </div>
    )
}

export default Team