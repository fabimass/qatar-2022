
interface ScoreInterface{
    goals: number | null
}

// This component represents a single team and his score
const Score = (props: ScoreInterface) => {

    return (
        <div className="font-sans text-md sm:text-2xl text-center m-0.5 sm:m-1 px-1 sm:px-2 py-0.5 sm:py-1 border-solid border-2 border-gray-300 rounded-2xl sm:rounded-3xl">
          <b>{(props.goals) === null ? "-" : props.goals}</b>
        </div>
    )
}

export default Score