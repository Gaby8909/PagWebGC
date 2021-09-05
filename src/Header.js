import React from "react";
import logo from "./images/dn_logoGCCC.png"
import "./header.css"


function Header() {
    return (
        <div className="header">
          <div className="header__menu">

              <a href="" className="header__menu__logo"><img src={logo} alt="logo"/></a>
              <div className="header__nav">
                  <a href="/">Acerca de mi</a>
                  <a href="/">Proyectos</a>
                  <a href="/">Contacto</a>

              </div>
          </div>
        </div>
    )
}




export default Header