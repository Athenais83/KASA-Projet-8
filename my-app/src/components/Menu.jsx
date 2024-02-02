import { Link } from 'react-router-dom'
import '../sass/_menu.scss'

const Menu = () => {
    return(
        <nav className='menu'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/About" className='link'>About</Link>
        </nav>
    )
}
export default Menu