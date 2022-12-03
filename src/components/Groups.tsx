import Group from './Group'

interface goalData{
    order: number,
    minute: string,
    author: string,
    team: number
}
  
interface matchData{
    order: number,
    team_1: string,
    team_1_goals: number | null,
    team_2: string,
    team_2_goals: number | null,
    goals: Array<goalData>,
    photo: string
}

interface groupData{
    name: string,
    matches: Array<matchData>
}

interface GroupsInterface{
    groups: Array<groupData>
}

// This component represents a group of matches
const Groups = (props: GroupsInterface) => {

    return (
        <div>
            { props.groups.map( group => <Group key={group.name} name={group.name} matches={group.matches} /> ) }
        </div>
    )
}

export default Groups