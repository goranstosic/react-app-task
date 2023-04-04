import {useLocation, useNavigate} from "react-router-dom";
import React, {Fragment, useContext, useEffect, useState} from "react";
import axiosInstance from "../API/Axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "./CreatePost";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import "react-notifications/lib/notifications.css";
import {UserContext} from "../store/user-context";
import EditPost from "./EditPost";

function SingleUserPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [userinfo, setUserInfo] = useState();
    const [usertodos, setUserTodos] = useState();
    const [userPosts, setUserPosts] = useState();
    const [isEdit, setIsEditOpen] = useState(false);
    const [editPostID, setEditPostID] = useState();

    const userContext = useContext(UserContext);

    // const getUserInfoTodosAndPosts = async () => {
    //     if (!location.state) return;
    //     const userid = location.state.userid
    //     const userInfoResponse = await axiosInstance.get(`users/${userid}`)
    //     const userTodosResponse = await axiosInstance.get(`users/${userid}/todos`)
    //     const userPostsResponse = await axiosInstance.get(`users/${userid}/posts`)
    //     setUserInfo(userInfoResponse.data)
    //     setUserTodos(userTodosResponse.data)
    //     setUserPosts(userPostsResponse.data);
    // };

    const deletePostHandler = async (postId) =>{
        const response = await axiosInstance.delete(`posts/${postId}`);
        console.log(response);
        const newPostsState = userContext.posts.filter(post=>post.id!==postId);
        userContext.setPosts(newPostsState);
        NotificationManager.success('Success message', 'Post Deleted');
    }
    // const navigateToCreatePost = (userId) =>{
    //     navigate('/new-post',{state:{userId:userId}})
    // }
   const navigateToEditPost=(postId)=>{
        navigate('/edit-post',{state:{postId:postId}})
    }

    useEffect(() =>{
        if(!location.state.userid) return;
        userContext.getUserInfoTodosAndPosts(location.state.userid);
    }, [])

    const [modalIsShown, setModalIsShown] = useState(false);
    const [editModalIsShown, setEditModalIsShown] = useState(false);

    const showModalHandler = () => {
        setModalIsShown(true);
    }

    const hideModalHandler = () => {
        setModalIsShown(false);
    }
    const editPostIDHandler = (postId) => {
        setEditPostID(postId);
        setEditModalIsShown(true);
    };

    const hideEditModalHandler = () => {
        setEditModalIsShown(false);
        console.log('test');
    }

    return (
        <>
            {modalIsShown && <CreatePost onClose={hideModalHandler} />}
            {editModalIsShown && <EditPost postId={editPostID} onClose={hideEditModalHandler} />}
            <Header />
            <div className='app_wrapper'>
                <Sidebar className='sidebar_container'/>
                <div>
                    {userContext.user &&
                    <>
                        <div>{userContext.user.id}</div>
                        <div><img src={require("../assets/avatar.png")} alt="user"/></div>
                        <div>{userContext.user.name}</div>
                        <div>{userContext.user.email}</div>
                        <button onClick={showModalHandler}>Create post</button>
                    </>
                    }
                    {userContext.todos && userContext.todos.map(todo =>(
                        <Fragment key={todo.id}>
                            <div>{todo.title}</div>
                            <div>{todo.completed? <img src={require('../assets/true.png')}/>: <img src={require('../assets/false.png')}/>}</div>
                        </Fragment>))
                    }
                    {userContext.posts && userContext.posts.map(post =>(
                        <div key={post.id} style={{marginTop:50}}>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                            <button onClick={()=>editPostIDHandler(post.id)}>Edit</button>
                            <button onClick={()=>deletePostHandler(post.id)}>Delete</button>
                        </div>))
                    }
                </div>
                <NotificationContainer/>
            </div>
            <Footer />
        </>
    )
};

export default SingleUserPage;