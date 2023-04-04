import Users from "../components/Users";
import Sidebar from '../components/Sidebar';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axiosInstance from "../API/Axios";
import React, {useContext, useEffect, useState} from "react";
import GoogleOauth from "../components/GoogleOauth";
import {AuthContext} from "../store/auth-context";
import {useNavigate} from "react-router-dom";

function HomePage(props) {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [readonlyUsers, setReadonlyUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await axiosInstance.get('users');
        setUsers(response.data);
        setReadonlyUsers(response.data);
        console.log(response);
    }

    // const isLoggedIn = props.isLoggedIn;

    useEffect(()=> {
        getUsers()
        console.log(authCtx.isLoggedIn)
        !authCtx.isLoggedIn && navigate('/login');
    },[]);
    return (
        <div className="home_page">
            <Header />
                <div className='app_wrapper'>
                    <Sidebar className='sidebar_container'/>
                    {users &&
                        <Users users={users} readonlyUsers={readonlyUsers} setUsers={setUsers} className='users_container'/>
                    }
                </div>
            <Footer />
        </div>
    )
}

export default HomePage;