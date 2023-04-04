import React, {useState} from 'react';
import axiosInstance from "../API/Axios";

const UserContext =  React.createContext();

const {Provider} = UserContext;

const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    const [posts, setPosts] = useState();
    const [todos, setTodos] = useState();
    const getUserInfoTodosAndPosts = async (userid) => {
        const userInfoResponse = await axiosInstance.get(`users/${userid}`)
        const userTodosResponse = await axiosInstance.get(`users/${userid}/todos`)
        const userPostsResponse = await axiosInstance.get(`users/${userid}/posts`)
        setUser(userInfoResponse.data);
        setTodos(userTodosResponse.data);
        setPosts(userPostsResponse.data);
    };
    return (
        <Provider value={{user, setUser, posts, setPosts, todos, setTodos, getUserInfoTodosAndPosts}}>{children}</Provider>
    )
};

export {UserContext, UserProvider};