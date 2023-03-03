import { TeamProps } from '../assets/Interfaces'

// This component represents a single team and his score
const Score = (props: TeamProps) => {

    return (
        <div className="text-center mx-0.5 my-auto sm:mx-1 px-1 sm:px-2 border-solid border-2 border-gray-300 rounded-2xl sm:rounded-3xl">
          <b>{(props.goals) === null ? "-" : props.goals}</b>
          {(props.penalties) != undefined ? <b className='text-cyan-500'> {`(${props.penalties})`}</b> : null}
        </div>
    )
}

export default Score