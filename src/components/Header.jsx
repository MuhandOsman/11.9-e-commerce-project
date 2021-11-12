import {NavLink,Link} from "react-router-dom"


const Header = () => {
    return (
        <header>
           <Link to="/" ><img src="https://i.pinimg.com/736x/3d/0a/9a/3d0a9a6068e11e8c661fae9b2cab37bc.jpg" alt="maybelline" /></Link>
            <ul>
                <NavLink to="/"  style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}><li>About</li></NavLink>
                <NavLink to="/home"  style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}><li>Shippment Form</li></NavLink>
                <NavLink to="/products"  style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}><li>Products</li></NavLink>
                <NavLink to="/cart"  style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}><li>YOUR CART</li></NavLink>
            </ul>
        </header>
    )
}

export default Header
