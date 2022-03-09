import { SiReact,  SiGithub } from 'react-icons/si'
import "./footer.css"


const FooterIndex = () => {
    const style= { fontSize: '1.4rem', verticalAlign: 'bottom', fill: 'rgb(124, 94, 101)'}

    return (
        <footer className="footer">
           <p>Desenvolvido por Matheus Gaia em <i><SiReact style={style}/></i> React!</p>
           <p className='contato'>Contato: <a href="https://github.com/Matheus-Gaia" ><i ><SiGithub style={style}/></i></a> </p>
        </footer>
    )
}

export default FooterIndex
