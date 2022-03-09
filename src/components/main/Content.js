import List from "./List"

const Content = ({ data, title }) => {
    return (
        <div className="content">
            <h2>{title}</h2>
            <ul className="lista">
                {data.map(item => (
                    <List item={item} key={item.id}/>
                ))}
            </ul>
        </div>
    )
}

export default Content
