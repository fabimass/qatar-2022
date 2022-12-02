import PlayoffColumn from './PlayoffColumn'
import PlayoffCenter from './PlayoffCenter'

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
        <div className="flex font-sans text-md">
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(0,4)} round={1} inverted={false} />
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Quarterfinals")[0].matches.slice(0,2)} round={2} inverted={false} />
           
            <PlayoffCenter semi1={ props.groups.filter(item => item.name === "Semifinals")[0].matches[0] }
                           semi2={ props.groups.filter(item => item.name === "Semifinals")[0].matches[1] }
                           third={ props.groups.filter(item => item.name === "Third Place")[0].matches[0] }
                           final={ props.groups.filter(item => item.name === "Final")[0].matches[0] } />
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Quarterfinals")[0].matches.slice(2,4)} round={2} inverted={true} />
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(4,8)} round={1} inverted={true} />
        </div>
    )
}

export default Playoffs