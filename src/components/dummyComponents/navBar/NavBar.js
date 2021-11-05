import NAV_BAR_ITEMS from "./NavBarItems";
import { Link } from "react-router-dom";
import InputSearch from '../generalSearch/InputSearch';
const NavBar = () => {
  return (
    <header className="header">
      <InputSearch/>
      <nav className="nav-menu">
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
