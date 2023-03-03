import PlayoffColumn from './PlayoffColumn'
import PlayoffCenter from './PlayoffCenter'
import { GroupsProps, MatchProps } from '../assets/Interfaces'

// This component will manage the playoffs chart
const Playoffs = (props: GroupsProps) => {

    const column1A: Array<MatchProps> = props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(0,4)
    const column1B: Array<MatchProps> = props.groups.filter(item => item.name === "Round of 16")[0].matches.slice(4,8)
    const column2A: Array<MatchProps> = props.groups.filter(item => item.name === "Quarterfinals")[0].matches.slice(0,2)
    const column2B: Array<MatchProps> = props.groups.filter(item => item.name === "Quarterfinals")[0].matches.slice(2,4)
    const columnCenter: Array<MatchProps> = [ props.groups.filter(item => item.name === "Semifinals")[0].matches[0],
                                              props.groups.filter(item => item.name === "Semifinals")[0].matches[1],
                                              props.groups.filter(item => item.name === "Third Place")[0].matches[0],
                                              props.groups.filter(item => item.name === "Final")[0].matches[0] ]

    return (
        <div className="flex font-sans text-md">
            <PlayoffColumn matches={column1A} margins={{ margin1:40, margin2:50, margin3:12}} inverted={false} />
            <PlayoffColumn matches={column2A} margins={{ margin1:104, margin2:0, margin3:190}} inverted={false} />
            <PlayoffCenter matches={columnCenter} />
            <PlayoffColumn matches={column2B} margins={{ margin1:104, margin2:0, margin3:190}} inverted={true} />
            <PlayoffColumn matches={column1B} margins={{ margin1:40, margin2:50, margin3:12}} inverted={true} />
        </div>
    )
}

export default Playoffs