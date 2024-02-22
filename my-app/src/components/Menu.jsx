import { Link, useLocation } from 'react-router-dom'
import '../sass/_menu.scss'

const Menu = () => {
    const location = useLocation();
    return(
        <nav className='menu'>
            <Link to="/" className={location.pathname === '/' ? 'link active' : 'link'}>Accueil</Link>
            <Link to="/About" className={location.pathname === '/About' ? 'link active' : 'link'}>A propos</Link>
        </nav>
    )
}
export default Menu