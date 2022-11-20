
interface ScoreInterface{
    goals: number | null
}

// This component represents a single team and his score
const Score = (props: ScoreInterface) => {

    return (
        <div className="text-black font-sans bg-white text-center border-solid border-2 border-gray-300">
          <b>{props.goals}</b>
        </div>
    )
}

export default Score