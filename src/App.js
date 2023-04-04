import './App.css';
import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleUserPage from "./pages/SingleUserPage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import {AuthContext} from "./store/auth-context";
import GoogleOauth from "./components/GoogleOauth";



function App() {
    const authContext = useContext(AuthContext);
    return (

        <Routes>
                <Route path={'/login'} element={<GoogleOauth/>}/>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/users/:id'} element={<SingleUserPage/>}/>
                <Route path={'/new-post'} element={<CreatePost/>}/>
                <Route path={'/edit-post'} element={<EditPost/>}/>
        </Routes>

    );
}

export default App;
