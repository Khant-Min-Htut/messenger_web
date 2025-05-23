import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |<NavLink to="/about">About</NavLink> |
      <NavLink to="/FnQ">FnQ</NavLink> |{" "}
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Header;
