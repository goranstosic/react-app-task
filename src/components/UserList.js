import UserListSingle from "./UserListSingle";
import {useNavigate} from "react-router-dom";
import './UsersList.css';

function UserList(props, {searchTerm}) {
    const classes = props.className;
    const navigate = useNavigate();
    const navigateToUser = (userid) => {
        navigate(`/users/${userid}`, {state: {userid: userid}});
    }

    const getInitialUsers = () => {
        if (!searchTerm) return props.users;
        return props.users.filter((item) => {
                console.log(item);
                return item.name.toLowerCase().startsWith(searchTerm.toLowerCase());
            }
        )
    }

    return (
        <div className={classes}>
            <div className="table_header">
                <div>ID</div>
                <div>Avatar</div>
                <div>Name</div>
                <div>Email</div>
            </div>
            {props.users && getInitialUsers().map(user=>(<div key={user.id} onClick={() => navigateToUser(user.id)}><UserListSingle id={user.id} name={user.name} email={user.email} /></div>))}
        </div>
    )
}
export default UserList;