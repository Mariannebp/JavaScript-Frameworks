import React from "react";
import Form from "../../components/form/contactForm";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
`;

function Contact() {
  return (
    <Div>
      <h1>Contact Us</h1>
      <Form />
    </Div>

  )
}

export default Contact;