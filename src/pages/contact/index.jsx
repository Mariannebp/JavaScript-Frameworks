import React from "react";
import Form from "../../components/form/contactForm";
import * as f from "../../components/styled/form"

function Contact() {
  return (
    <f.FormContainer>
      <h1>Contact Us</h1>
      <Form />
    </f.FormContainer>
  )
}

export default Contact;