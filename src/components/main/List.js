const List = ({ item }) => {
    return (
        <a href={item.html_url} className="listItem">
            <li>
                {item.name}
                <p>full name:</p>
                {item.full_name}
            </li>
        </a>
    )
}

export default List
