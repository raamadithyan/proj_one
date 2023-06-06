'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface inputProps{
id:string;
label:string;
type?:string;   
disabled?:boolean;
formatPrice?:boolean;
required?:boolean;
register:UseFormRegister<FieldValues>;
errors:FieldErrors;
}



 const Input:React.FC<inputProps> = (
    {
        id,
        label,
        type,
        disabled,
        formatPrice,
        required,
        register,
        errors
    }
    ) => {
  return (
    <div>Input</div>
  )
}

export default Input;   