import { Link } from "react-router-dom";
import { Nav, Logo,Menu,MenuItem, NavbarItem}
from "./Navbar.styled";

const Navbar = () => {
  return (
    <Nav>
      <Logo>MovieApp</Logo>
      <Menu>
        <MenuItem>
          <NavbarItem to="/">Home</NavbarItem>
        </MenuItem>
        <MenuItem>
          <NavbarItem to="/movie/create">Add Movie</NavbarItem>
        </MenuItem>
        <MenuItem>
          <NavbarItem to="/movie/popular">Popular</NavbarItem>
        </MenuItem>
        <MenuItem>
          <NavbarItem to="/movie/now">Now Playing</NavbarItem>
        </MenuItem>
        <MenuItem>
          <NavbarItem to="/movie/top">Top</NavbarItem>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
