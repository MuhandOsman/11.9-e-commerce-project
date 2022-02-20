import { NavLink } from "react-router-dom";


const NavLinks = () => {
  return (
    <ul>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>About</li>
      </NavLink>
      <NavLink
        to="/home"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>Shippment Form</li>
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>Products</li>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => {
          return { color: isActive && "green" };
        }}
      >
        <li>YOUR CART</li>
      </NavLink>
    </ul>
  );
};

export default NavLinks;
