import Content from './Content'
import "./main.css"

const MainIndex = ({ reposData, starredData }) => {

    return (
        <main className='main'>
            <Content 
                title={'Repositórios'}
                data={reposData}
            />
            <Content
                title={'Favoritos'}
                data={starredData}
            />
        </main>
    )
}

export default MainIndex
