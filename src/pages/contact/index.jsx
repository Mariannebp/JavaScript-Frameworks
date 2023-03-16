import React from "react";
import Form from "../../components/form/contactForm";
import FormContainer from "../../components/styled/formContainer";
import Heading1 from "../../components/styled/heading1";

function Contact() {
  return (
    <FormContainer>
      <Heading1>Contact Us</Heading1>
      <Form />
    </FormContainer>
  )
}

export default Contact;