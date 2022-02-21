import { NavLink } from "react-router-dom";
import "./NavBar.css"

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
        <li>Shipment Form</li>
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
        <li>CART</li>
      </NavLink>
    </ul>
  );
};

export default NavLinks;
