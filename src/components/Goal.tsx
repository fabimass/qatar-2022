import Ball from './Ball'

interface GoalInterface{
    minute: string,
    author: string,
    reverse: boolean
}

// This component represents a single goal
const Goal = (props: GoalInterface) => {

    return (<>
        {
            (props.reverse == true)
              ? <div className="flex justify-end w-1/2 ml-auto mr-0 my-1 bg-slate-900/75 rounded-2xl sm:rounded-3xl cursor-default">
                  <div className="text-center my-auto font-sans text-sm sm:text-md grow">{props.minute}' {props.author}</div>
                  <Ball />
                </div>
              : <div className="flex justify-start w-1/2 ml-0 mr-auto my-1 bg-slate-900/75 rounded-2xl sm:rounded-3xl cursor-default">
                  <Ball />
                  <div className="text-center my-auto font-sans text-sm sm:text-md grow">{props.author} {props.minute}'</div>
                </div>  
        }      
    </>)
}

export default Goal