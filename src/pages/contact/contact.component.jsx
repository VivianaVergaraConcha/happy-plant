import React from "react";
import ContactForm from "../../components/contact-form/contact-form.component";

import "./contact.styles.css"

const ContactPage = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">Contacto</h1>
      <ContactForm/>
    </div>
  );
}

export default ContactPage;