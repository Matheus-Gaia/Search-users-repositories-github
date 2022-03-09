const User = ({ name, username, company, location, avatar, errSearch }) => {
    return (
        <>
            {name && 
                <div className="user">
                    <img src={avatar} alt="avatar" className="avatar"/>
                    <div className="user-data">
                        <h3 className="name">{name}</h3>
                        <p>Username: <a href={`https://github.com/${username}`} target="blank" className="userLink">{username}</a></p>
                        <p>Company: {company}</p>    
                        <p>Location: {location}</p>    
                    </div>
                </div>
            }
            {!name && !errSearch && 
                <div className="user">
                    <h3>Pesquisar usuário!</h3>
                </div>
            }
            {errSearch && !name && 
                <div className="user">
                    <h3>Usuário não encontrado!</h3>
                </div>  
            }
        </>
    )
}

export default User
