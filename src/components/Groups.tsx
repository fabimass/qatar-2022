import Group from './Group'

interface GroupsInterface{
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

// This component represents a group of matches
const Groups = (props: GroupsInterface) => {

    return (
        <div>
            { props.groups.map( group => <Group key={group.name} name={group.name} matches={group.matches} /> ) }
        </div>
    )
}

export default Groups