import Search from "./Search"
import User from "./User"
import "./header.css"

const Header = ({name, username, company, location, avatar, search, setSearch, handleSubmit, errSearch }) => {
    
    return (
        <header className="header">
            <Search 
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
            />
            <User 
                name={name}
                username={username}
                company={company}
                location={location}
                avatar={avatar}
                errSearch={errSearch}
            />
        </header>
    )
}

export default Header
