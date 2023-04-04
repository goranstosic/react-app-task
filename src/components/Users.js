import React, { useState } from "react";
import UserList from './UserList';
import Search from "./Search";



function Users(props) {

    const classes = props.className;

    return (
        <div className={classes}>
            <h2>Users</h2>
            <Search setUsers={props.setUsers} readonlyUsers={props.readonlyUsers} className='search_container'/>
            {props.users &&
            <UserList className='user_list' users={props.users}/>
            }
        </div>
    )
}

export default Users;