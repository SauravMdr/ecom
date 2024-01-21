'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Input,Button} from "@nextui-org/react";
// import { useRouter } from 'next/navigation'

const SignInForm = () => {
   const SignInSchema = Yup.object().shape({
    phoneNumber: Yup.string().required('Required')
 });
 
 const loginUser = async(values)=> {
 const res=  await fetch('http://localhost:5000/login/',{
    method: 'POST',
    headers: {'Content-Type':'application/json' },
    body: JSON.stringify(values)
  })
 }

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    validationSchema:SignInSchema,
    onSubmit: values => {
      loginUser(values)
    },
  });

  return (
    <form  onSubmit={formik.handleSubmit}>
      <h2>Sign In</h2>
      <Input 
       id="phoneNumber"
       label="phoneNumber"
       name="phoneNumber"
       type="text"
       onChange={formik.handleChange}
       value={formik.values.phoneNumber}
      />
        {formik?.errors.phoneNumber}
      <Input 
       id="password"
       label="password"
       name="password"
       type="password"
       onChange={formik.handleChange}
       value={formik.values.password}
       />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SignInForm