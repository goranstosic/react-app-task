import './User.css';
function User(props) {
    return (
        <div className='user_row'>
            <div>{props.id}</div>
            <div><img src={require("../assets/avatar.png")} alt="user"/></div>
            <div>{props.name}</div>
            <div>{props.email}</div>
        </div>
    )
};
export default User;