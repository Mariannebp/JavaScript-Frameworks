import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import BasicButton from "../styled/button";
import InputContainer from "../styled/formInputContainer";
import FormInput from "../styled/fromInput";
import FormError from "../styled/formError";
import FormTextarea from "../styled/formTextarea";

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
        <InputContainer>
          <label htmlFor="fullName">Full Name</label>
          <FormInput {...register(`fullName`)} />
          <FormError>{errors.fullName?.message}</FormError>
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <FormInput {...register(`email`)} />
          <FormError>{errors.email?.message}</FormError>
        </InputContainer>
        <InputContainer>
          <label htmlFor="subject">Subject</label>
          <FormInput {...register(`subject`)} />
          <FormError>{errors.subject?.message}</FormError>
        </InputContainer>
        <InputContainer>
          <label htmlFor="body">Body</label>
          <FormTextarea {...register(`body`)} />
          <FormError>{errors.body?.message}</FormError>
        </InputContainer>
        <BasicButton>Submit</BasicButton>
      </form>
    </div>
  )
}

export default Form;