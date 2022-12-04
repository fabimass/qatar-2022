import Group from './Group'
import { GroupsProps } from '../assets/Interfaces'

// This component represents a group of matches
const Groups = (props: GroupsProps) => {

    return (
        <div>
            { props.groups.map( group => <Group key={group.name} {...group} /> ) }
        </div>
    )
}

export default Groups