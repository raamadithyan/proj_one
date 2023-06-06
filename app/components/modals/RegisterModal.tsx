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
  const bodyContent = <div 
  className='flex flex-col gap-4'>
<Heading center 
title='Welcome to Airbnb'
subtitle='Create an account '
  />
  <Input  />
</div>  

const footerContent = <div> Footer</div>


  return (
    <Modal 
    title='Register' 
    isOpen={store.isOpen}
    body={bodyContent }
    footer={footerContent}
    />
  )
}

export default RegisterModel