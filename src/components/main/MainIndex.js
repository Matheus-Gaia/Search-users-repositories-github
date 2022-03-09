import Content from './Content'
import "./main.css"

const MainIndex = ({ reposData, starredData, errSearch }) => {

    return (
        <main className='main'>
            <Content 
                title={'Repositórios'}
                data={reposData}
                errSearch={errSearch}
            />
            <Content
                title={'Favoritos'}
                data={starredData}
                errSearch={errSearch}
            />
        </main>
    )
}

export default MainIndex
