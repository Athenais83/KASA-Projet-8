import { Link } from 'react-router-dom'
import '../sass/_menu.scss'

const Menu = () => {
    return(
        <nav className='menu'>
            <Link to="/" className='link'>Accueil</Link>
            <Link to="/About" className='link'>A propos</Link>
        </nav>
    )
}
export default Menu