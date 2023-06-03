"use client";

import axios from 'axios';
import { useCallback,useState } from 'react';
import { FieldValues,SubmitHandler,useForm } from 'react-hook-form';
import Modal from './Modal';

import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'


import useRegisterModal from '@/app/hooks/useRegisterModel';

function RegisterModel() {
  const store= useRegisterModal()
  return (
    <Modal isOpen={store.isOpen}/>
  )
}

export default RegisterModel