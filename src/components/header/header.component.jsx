import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/leaf-1.svg";

import "./header.styles.css";

const Header = () => (
    <div className="navbar">
        <Link className="logo-content" to="/">
            <Logo />
            <span>HappyPlant</span>
        </Link>
        <div>
            <NavLink exact className="nav-item" activeClassName="activo" to="/">
                Inicio
            </NavLink>
            <NavLink className="nav-item" activeClassName="activo" to="/plantas">
                Plantas
            </NavLink>
            <NavLink className="nav-item" activeClassName="activo" to="/contacto">
                Contacto
            </NavLink>
        </div>
        <div className="search">
            <input type="search" />
        </div>
    </div>
)

export default Header;

