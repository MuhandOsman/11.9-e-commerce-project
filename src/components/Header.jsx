import {NavLink,Link} from "react-router-dom"


const Header = () => {
    return (
        <header>
           <Link to="/" ><img src="https://i.pinimg.com/736x/3d/0a/9a/3d0a9a6068e11e8c661fae9b2cab37bc.jpg" alt="maybelline" /></Link>
            <ul>
                <NavLink to="/" ><li>About</li></NavLink>
                <NavLink to="/home" ><li>Home</li></NavLink>
                <NavLink to="/products" ><li>Products</li></NavLink>
                <NavLink to="/cart" ><li>YOUR CART</li></NavLink>
            </ul>
        </header>
    )
}

export default Header
