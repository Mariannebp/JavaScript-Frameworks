import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import BasicButton from "../styled/button";
import * as f from "../../components/styled/form";
import { createPortal } from "react-dom";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, `You need at least 3 characters`)
      .max(50, `Your name must be 50 characters or less`)
      .required(`Enter a name`),
    email: yup
      .string()
      .matches(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/, `Enter a valid email address`)
      .required(`Enter your email address`),
    subject: yup
      .string()
      .min(3, "You need at least 3 characters")
      .max(100, "You can only have 100 characters or less")
      .required(`Enter a subject`),
    body: yup
      .string()
      .min(3, "You need at least 3 characters")
      .max(1000, "Make sure to have 1000 characters or less")
      .required(`Needs to contain some content`),
  })
  .required();

/**
 * Creates the form for the contact page, with proper validation 
 */
function Form() {
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    document.title = "The One | Contact";
  })

  const [showModal, setShowModal] = useState(false);

  /**
   * Function that sets that console logs the information from form. The function is passed in as a parameter on handleSubmit.
   * @param {string} data - gets the information to be console logged.
   */
  function onSubmit(data) {
    console.log(data);
    setShowModal(true);
  }

  return (
    <f.FormBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <f.InputContainer>
          <label htmlFor="fullName">Full Name</label>
          <f.FormInput id="fullName" {...register(`fullName`)} />
          <f.FormError>{errors.fullName?.message}</f.FormError>
        </f.InputContainer>
        <f.InputContainer>
          <label htmlFor="email">Email</label>
          <f.FormInput id="email" {...register(`email`)} />
          <f.FormError>{errors.email?.message}</f.FormError>
        </f.InputContainer>
        <f.InputContainer>
          <label htmlFor="subject">Subject</label>
          <f.FormInput id="subject" {...register(`subject`)} />
          <f.FormError>{errors.subject?.message}</f.FormError>
        </f.InputContainer>
        <f.InputContainer>
          <label htmlFor="body">Body</label>
          <f.FormTextarea id="body" {...register(`body`)} />
          <f.FormError>{errors.body?.message}</f.FormError>
        </f.InputContainer>
        <BasicButton>Submit</BasicButton>
      </form>
      {showModal && createPortal(
        <f.FormModal >
          <p>Your message is sent.</p>
          <p>Thank you for contacting us!</p>
          <BasicButton onClick={() => setShowModal(false)}>Close</BasicButton>
        </f.FormModal>,
        document.body
      )}
    </f.FormBox>
  )
}

export default Form;