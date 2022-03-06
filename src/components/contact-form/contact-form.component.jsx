import React from "react";

import "./contact-form.styles.css"

const ContactForm = () => {
    return (
        <form action="" className="contact-form">
            <label htmlFor="">Nombre</label>
            <input type="text" className="input" />
            <label htmlFor="">Correo</label>
            <input type="email" name="" id=""  className="input"/>
            <label htmlFor="">Asunto</label>
            <input type="text"  className="input"/>
            <label htmlFor="">Mensaje</label>
            <textarea name="" id="" cols="30" rows="10" className="input"></textarea>
            <button className="button">Enviar</button>
        </form>
    )
}

export default ContactForm;