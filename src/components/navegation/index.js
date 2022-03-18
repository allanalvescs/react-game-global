import '../navegation/navegation.css'
import Image from '../figure/index'
import ico from '../../menu.png'

function MainMenu() {
    return (
        <nav className="App-navegation">
            <ul className="main-Menu">
                <li>Home</li>
                <li>Games</li>
                <li>Company</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <Image path={ico} descripition="ico menu"/>
        </nav>
    )
}

export default MainMenu