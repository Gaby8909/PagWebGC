import  React from "react"
import "./contact.css"

function Contact () {


    return (
        <div className="contact">
            <div className="contac__title"><h1>Contacto</h1></div>
            <div className="contact__form">
                <form>
                    <input name="nombre" placeholder="Nombre"/>
                    <textarea placeholder="Escribe  aquí tu mensaje..."></textarea>
                    <button>Enviar Mensaje</button>
                </form>

            </div>



        </div>
    )
}

export default Contact