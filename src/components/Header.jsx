import {Link} from "react-router-dom"
import NavBar from "./NavBar/NavBar"



const Header = () => {
    return (
        <header>
           <Link to="/" ><img src="https://i.pinimg.com/736x/3d/0a/9a/3d0a9a6068e11e8c661fae9b2cab37bc.jpg" alt="maybelline" /></Link>
           <NavBar /> 
        </header>
    )
}

export default Header
