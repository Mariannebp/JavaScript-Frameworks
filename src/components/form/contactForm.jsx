import React from "react";
import styled from "styled-components";
import BasicButton from "../design/button";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const FormContainer = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px;
  max-width: 350px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

const Error = styled.p`
  color: red;
`;

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
      // .email() --> could be used, but for me it allows it as soon as it has @. USE MATCHES!!
      .required(`Enter your email address`),
    subject: yup
      .string()
      .min(3, "You need at least 3 characters")
      .max(100, "You can only have 100 characters or less")
      .required(`Enter a subject`),
    body: yup
      .string()
      .min(3, "You need at least 3 characters")
      .max(1000, "Make sure to have 1000 characters or least")
      .required(`Needs to contain some content`),
  })
  .required();

function Form() {
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <label htmlFor="fullName">Full Name</label>
          <Input {...register(`fullName`)} />
          <Error>{errors.fullName?.message}</Error>
        </Div>
        <Div>
          <label htmlFor="email">Email</label>
          <Input {...register(`email`)} />
          <Error>{errors.email?.message}</Error>
        </Div>
        <Div>
          <label htmlFor="subject">Subject</label>
          <Input {...register(`subject`)} />
          <Error>{errors.subject?.message}</Error>
        </Div>
        <Div>
          <label htmlFor="body">Body</label>
          <Input {...register(`body`)} />
          <Error>{errors.body?.message}</Error>
        </Div>
        <BasicButton>Submit</BasicButton>
      </form>
    </FormContainer>
  )
}

export default Form;