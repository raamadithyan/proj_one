"use client";

import axios from 'axios';
import { useCallback,useState } from 'react';
import { FieldValues,SubmitHandler,useForm } from 'react-hook-form';
import Modal from './Modal';

import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'


import useRegisterModal from '@/app/hooks/useRegisterModel';
import  Heading  from '../heading/Heading';
import   Input  from '../input/Input';

function RegisterModel() {
  const store= useRegisterModal()
  const [loading,setLoading]= useState(false)
  const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({defaultValues:{
    name:'',
    password:'',
    email:''
  }})
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{
    setLoading(true)
    axios.post('/api/register',data)
    .then(()=>store.onClose())
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }


  const bodyContent = <div 
  className='flex flex-col gap-4'>
<Heading center 
title='Welcome to Airbnb'
subtitle='Create an account '
  />
  <Input  id='email' type='text'
  label='Email'
  disabled={loading}
  register={register}
  errors={errors}
  required
  />
  <Input  id='name' type='text'
  label='Name'
  disabled={loading}
  register={register}
  errors={errors}
  required
  />
  <Input  id='password' type='password'
  label='Password' 
  disabled={loading}
  register={register}
  errors={errors}
  required
  />
</div>  

const footerContent = <div> Footer</div>


  return (
    <Modal 
    disabled={loading}
    title='Register' 
    isOpen={store.isOpen}
    onClose={store.onClose}
    actionLabel='Continue'
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent }
    footer={footerContent}
    />
  )
}

export default RegisterModel