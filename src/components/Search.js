import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import './Search.css';

function Search(props) {
    // const classes = props.className;
    const [searchTerm, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
        props.setUsers(props.readonlyUsers.filter(user => user.name.includes(event.target.value)))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleSearch}
                    />
                </div>
                {/* {button && <Button content="search!" />} */}
            </form>
        </div>
    )
}

export default Search;