import User from './User';

function UserListSingle(props) {
    return (
        <User id={props.id} name={props.name} email={props.email}/>
    )
}

export default UserListSingle;