import React from "react";
import "./header.css"
import logoLinkedin from "./images/dn__logoLinKedin.png";
import logoGitHub from "./images/dn_logo__github.png";



function Header() {
    return (
        <div className="header">
          <div className="header__menu">

              <div className="header__nav">
                  <a href="/">Curriculum</a>
                  <a href="/#proyectos">Proyectos</a>
                  <a href="/Contacto">Contacto</a>

              </div>


              <p><a className="header__enlace" href="https://www.linkedin.com/in/gaby-campoverde-744871106/" target="_blank" ><img className="logoLikedin" src={logoLinkedin} alt="logoLinkedin" /></a></p>
              <p><a className="header__enlace_github" href="https://github.com/Gaby8909" target="_blank" ><img className="logoGitHub" src={logoGitHub} alt="logoGitHub" /></a></p>

          </div>
        </div>
    )
}




export default Header