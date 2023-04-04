import {useLocation} from "react-router-dom";
import axiosInstance from "../API/Axios";
import {useContext, useEffect, useState} from "react";
import Modal from "../components/Modal";
import {UserContext} from "../store/user-context";
import {NotificationManager} from "react-notifications";

function EditPost(props){
    const [post, setPost] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const location = useLocation();
    const userContext = useContext(UserContext);

    const getPostById = async () =>{
        const response = await axiosInstance.get(`posts/${props.postId}`);
        setPost(response.data);
        setPostTitle(response.data.title);
        setPostContent(response.data.body);
    }
    const postSubmitHandler = async (event) => {
        event.preventDefault();
        const postData={
            title:postTitle,
            body:postContent,
        }
        const response = await axiosInstance.put(`posts/${props.postId}`,postData);
        const post = userContext.posts.find(item => item.id === props.postId);
        post.title = postTitle;
        post.body = postContent;
        console.log(response);
        setPostTitle('');
        setPostContent('');
        console.log(postData);
        NotificationManager.success('Success message', 'Post Edited!');
        props.onClose();
    };

    useEffect(()=>{
        getPostById();
    },[])

    return (
        <Modal>
            <form onSubmit={postSubmitHandler}>
                <div>
                    <input value={postTitle ? postTitle: ''} onChange={(event)=> setPostTitle(event.target.value)} type="text" />
                </div>
                <div>
                    <textarea value={postContent ? postContent : ''} onChange={(event)=>setPostContent(event.target.value)} />
                </div>
                <button type="submit">Edit Post</button>
                <button onClick={props.onClose}>Close</button>
            </form>
        </Modal>
    )
}
export default EditPost;