import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import BasicButton from "../styled/button";
import * as f from "../../components/styled/form";
// import InputContainer from "../styled/form/formInputContainer";
// import FormInput from "../styled/form/fromInput";
// import FormError from "../styled/form/formError";
// import FormTextarea from "../styled/form/formTextarea";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, `You need at least 3 characters`)
      .max(50, `Your name must be 50 characters or less`)
      .required(`Enter a name`),
    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, `Enter a valid email address`)
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

function Form() {
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <f.InputContainer>
          <label htmlFor="fullName">Full Name</label>
          <f.FormInput {...register(`fullName`)} />
          <f.FormError>{errors.fullName?.message}</f.FormError>
        </f.InputContainer>
        <f.InputContainer>
          <label htmlFor="email">Email</label>
          <f.FormInput {...register(`email`)} />
          <f.FormError>{errors.email?.message}</f.FormError>
        </f.InputContainer>
        <f.InputContainer>
          <label htmlFor="subject">Subject</label>
          <f.FormInput {...register(`subject`)} />
          <f.FormError>{errors.subject?.message}</f.FormError>
        </f.InputContainer>
        <f.InputContainer>
          <label htmlFor="body">Body</label>
          <f.FormTextarea {...register(`body`)} />
          <f.FormError>{errors.body?.message}</f.FormError>
        </f.InputContainer>
        <BasicButton>Submit</BasicButton>
      </form>
    </div>
  )
}

export default Form;