import {useContext, useState} from "react";
import {useLocation} from "react-router-dom";
import axiosInstance from "../API/Axios";
import Modal from "../components/Modal";
import {NotificationManager} from "react-notifications";
import {UserContext} from "../store/user-context";

function CreatePost(props) {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const location = useLocation();
    const userContext = useContext(UserContext);
    const postSubmitHandler = async (event) => {
        if(!location.state) return;
        event.preventDefault();
        const postData={
            title:postTitle,
            body:postContent,
            userId:location.state.userId
        }
        userContext.setPosts(prevState => [postData, ...prevState]);

        const response = await axiosInstance.post('posts',postData);
        console.log(response);
        setPostTitle('');
        setPostContent('');
        console.log(postData);
        NotificationManager.success('Success message', 'Post Created!');
        props.onClose();
    };


    return (
        <Modal>
            <form onSubmit={postSubmitHandler}>
                <div>
                    <input value={postTitle} onChange={(event)=> setPostTitle(event.target.value)} type="text" />
                </div>
                <div>
                    <textarea value={postContent} onChange={(event)=>setPostContent(event.target.value)} />
                </div>
                <button type="submit">Create Post</button>
                <button onClick={props.onClose}>Close</button>
            </form>
        </Modal>
    )
}

export default CreatePost