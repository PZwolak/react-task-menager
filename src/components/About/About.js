import { Link } from 'react-router-dom'
import "../About/About.scss"
const About = () => {
    return (
        <div className="about">
            <p>It is only simple text to show React Route</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default About
