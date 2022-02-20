import NavLinks from "./NavLinks";
import {CgMenuRound} from "react-icons/cg";
import {RiCloseCircleLine} from "react-icons/ri"
import {useState} from "react"

const MobileNav = () => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <CgMenuRound className="Hamburger" size="40px" color="black" 
    onClick={() => setOpen(!open)}/>

    const closeIcon = <RiCloseCircleLine className="Hamburger" size="40px" color="black" 
    onClick={() => setOpen(!open)}/>

  return (

    <nav className="MobileNav">
      
      {open ? closeIcon : hamburgerIcon} 
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNav;
