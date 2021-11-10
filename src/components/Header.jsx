import {NavLink,Link} from "react-router-dom"


const Header = () => {
    return (
        <header>
           <Link to="/" ><h1>LOGO</h1></Link>
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
