import './Sidebar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder, faTableColumns} from "@fortawesome/free-solid-svg-icons";

function Sidebar (props) {
    const classes = props.className;

    return (
        <div className={classes}>
            <div className="sidebar_title">
                <FontAwesomeIcon icon={faTableColumns} />
                <span>Dashboards</span>
            </div>
            <ul>
                <li>Main</li>
                <li>User Insights</li>
            </ul>
            <div className="sidebar_title">
                <FontAwesomeIcon icon={faFolder} />
                <span>Resources</span>
            </div>
            <ul>
                <li>Address</li>
                <li>Comments</li>
                <li>Posts</li>
                <li>Purchases</li>
                <li>Roles</li>
                <li>Tags</li>
                <li>Users</li>
            </ul>
        </div>
    )
}

export default Sidebar;