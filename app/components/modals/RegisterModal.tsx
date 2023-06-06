"use client";

import axios from 'axios';
import { useCallback,useState } from 'react';
import { FieldValues,SubmitHandler,useForm } from 'react-hook-form';
import Modal from './Modal';

import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'


import useRegisterModal from '@/app/hooks/useRegisterModel';
import  Heading  from '../heading/Heading';

function RegisterModel() {
  const store= useRegisterModal()
  const bodyContent = <div 
  className='flex flex-col gap-4'>
<Heading title='13.4.4'/>
    </div>

  return (
    <Modal 
    title='Register' 
    isOpen={store.isOpen}
    body={bodyContent }
    />
  )
}

export default RegisterModel