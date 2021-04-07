import { Link } from 'react-router-dom'
import "../Footer/Footer.scss"
const Footer = () => {
    return (
        <footer>
            <p>Created by Patryk Zwolak. Copyright &copy; 2021</p>
            <Link to="/about">About project</Link>
        </footer>
    )
}

export default Footer
