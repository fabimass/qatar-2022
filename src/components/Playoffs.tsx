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
            minute: number,
            author: string,
            team: number
          }>,
          photo: string
        }>
    }>
}

// This component will manage the playoffs for big screens
const Playoffs = (props: PlayoffsInterface) => {

    console.log(props.groups.filter(item => item.name === "Round of 16"))
    return (
        <div className="flex">
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(0,4)} aligned={"vertical-left"} />
            <div className="grow">test</div>
            <PlayoffColumn matches={props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(4,8)} aligned={"vertical-right"} />
        </div>
    )
}

export default Playoffs