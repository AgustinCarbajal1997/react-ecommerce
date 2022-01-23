import { useState } from "react"
import NAV_BAR_ITEMS from "./NavBarItems";
import { Link } from "react-router-dom";
import InputSearch from '../generalSearch/InputSearch';
import { Fade as Hamburger } from 'hamburger-react'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20}/>
      </div>
      
      <InputSearch/>
      <nav 
        style={{ left: isOpen ? "0%" : "-100%" }}
        className="nav-menu">
        {
            NAV_BAR_ITEMS.map((item, index)=> (
                <Link 
                    to={item.href}
                    className="nav-item"
                    key={index}
                >
                    {item.item}
                </Link>
            ))
        }
      </nav>
    </header>
  );
};

export default NavBar;
