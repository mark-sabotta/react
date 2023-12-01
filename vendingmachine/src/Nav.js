import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/">
                Vending Machine
            </NavLink>
            <NavLink to="/Wendys">
                Wendy's
            </NavLink>
            <NavLink to="/Rockstar">
                Rockstar
            </NavLink>
            <NavLink to="/Mac">
                Mac n Cheese
            </NavLink>
        </nav>
    );
}

export default NavBar;