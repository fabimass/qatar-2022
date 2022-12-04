import Match from './Match'
import { GroupProps } from '../assets/Interfaces'

// This component represents a single group
const Group = (props: GroupProps) => {

    return (
      <div className="inline-block my-3 sm:m-4 p-0.5 sm:p-1 min-w-full sm:min-w-[550px] bg-slate-900/75 text-center text-white font-sans text-md 2xl:text-xl border-solid border-2 border-gray-300 rounded-2xl sm:rounded-3xl">
          <p>{props.name}</p>
          <hr className="my-2 border-gray-300 "></hr>
          <div>
            { props.matches.map( match => <Match key={match.order+props.name} 
                                                 {...match}
                                                 inline={true} /> ) }
          </div>
      </div>
    )
}

export default Group