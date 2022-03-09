const Search = ({ search, setSearch, handleSubmit }) => {
    return (
        <div className="search">
            <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Search User"
                autoFocus
                value={search}    
                onChange={e => setSearch(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Search"
                className="button"
                onClick={e => handleSubmit(e)}
            >
                Search
            </button>
            </form>
        </div>
    )
}

export default Search
