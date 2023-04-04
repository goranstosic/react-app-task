import './Header.css';
import Search from "./Search";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {googleLogout} from "@react-oauth/google";
import {AuthContext} from "../store/auth-context";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

function Header() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const logOut = async () => {
        await googleLogout();

        authContext.setIsLoggedIn(false);
        console.log(authContext.isLoggedIn);
        navigate('/login');
    };

    return (
        <div className="header_container">
            <div className="app_identity">
                <img src={require("../assets/logo.png")} alt="logo"/>
            </div>
            <div className="search">
                <Search className='search_container'/>
            </div>
            <div className="user_menu">
                <div>
                    <FontAwesomeIcon icon={faBell} />
                    <img src={require("../assets/user_avatar.png")} alt="logo"/>
                    <span>Digital</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <button onClick={logOut}>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default Header;