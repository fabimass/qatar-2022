import PlayoffColumn from './PlayoffColumn'

interface PlayoffsInterface{
    groups: Array<{
        name: string,
        matches: Array<{
          order: number,
          team_1: string,
          team_1_goals: number | null,
          team_2: string,
          team_2_goals: number | null,
          goals: Array<{
            order: number,
            minute: string,
            author: string,
            team: number
          }>,
          photo: string
        }>
    }>
}

// This component will manage the playoffs for big screens
const Playoffs = (props: PlayoffsInterface) => {

    return (
        <div className="flex">
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(0,4)} inverted={false} />
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Quarterfinals")[0].matches.slice(0,2)} inverted={false} />
            
            <div className="grow">{"test"}</div>
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(4,8)} inverted={false} />
        </div>
    )
}

export default Playoffs