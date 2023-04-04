import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {GoogleOAuthProvider} from "@react-oauth/google";
import {AuthProvider} from './store/auth-context';
import {UserProvider} from "./store/user-context";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="521786326591-n9kub180jj85spoupglcp5eeret2neun.apps.googleusercontent.com">
        <AuthProvider>
            <UserProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </UserProvider>
        </AuthProvider>
    </GoogleOAuthProvider>,
);