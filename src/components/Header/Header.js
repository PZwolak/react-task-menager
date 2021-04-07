import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from '../Button/Button'
import '../Header/Header.scss'


function Header({title, onAdd, showAdd}) {
    const location = useLocation()
    return (
        <header>
            <h1>
                {title}
            </h1>
            
            {location.pathname === '/' && <Button text={showAdd ? "Close" : "Add"} onAdd={onAdd} showAdd={showAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
