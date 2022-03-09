import List from "./List"

const Content = ({ data, title, errSearch }) => {
    return (
        <>
            {!errSearch && 
                <div className="content">
                    <h2>{title}</h2>
                    <ul className="lista">
                        {data.map(item => (
                            <List item={item} key={item.id}/>
                        ))}
                    </ul>
                </div>
            } 
            {errSearch && 
                <div className="content">
                    <h2>Usuário não encontrado</h2>
                </div>
            }
        </>
    )
}

export default Content
