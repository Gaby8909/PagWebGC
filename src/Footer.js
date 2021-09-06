import React from "react"
import "./footer.css"
import logoLinkedin from "./images/logo__linkedin.png"



function Footer () {
    return (
        <div className="footer">


            <p>Copyright by Gaby Campoverde 2021</p>
            <p><a className="footer__enlace" href="https://www.linkedin.com/in/gaby-campoverde-744871106/" target="_blank" ><img src={logoLinkedin} alt="logoLinkedin"/></a></p>

        </div>
    )

}

export default Footer