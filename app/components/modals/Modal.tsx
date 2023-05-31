"use client";
import { IoMdClose } from 'react-icons/io'
import { isPageStatic } from "next/dist/build/utils";
import { useState, useEffect, useCallback } from "react";

import Button from '../navbar/Button'

interface Modelprops {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<Modelprops> = (
  { isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel }
) => {
  const [showModel, setShowModel] = useState(isOpen)
  useEffect(() => {
    setShowModel(isOpen)
  }, [isOpen])

  const handleClose = useCallback(
    () => {
      if (disabled) {
        return
      }
      setTimeout(() => onClose(), 300)
      setShowModel(false)
    },
    [disabled, onClose],
  )

  const handleSubmit = useCallback(
    () => {
      if (disabled) {
        return
      }
      onSubmit()
    },
    [disabled, onSubmit]
  )

  const handleSecondaryAction = useCallback(
    () => {
      if (disabled) {
        return
      }
      secondaryAction()
    },
    [disabled, secondaryAction]
  )
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="
    justify-center
    items-center
    flex 
    overflow-x-hidden
    overflow-y-auto
    bg-neutral-800/60
    fixed
    inset-0
    z-10
    outline-none
    focus:outline-none
    "
      >
        <div className="
        relative
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto
        h-full
        lg:h-auto
        md:h-auto
      
      ">
          {/* CONTeNT */}
          <div className={
            `translate
          duration-300
          h-full
          ${showModel ? 'translate-y-0' : 'translate-y-full'}
          ${showModel ? 'opacity-100' : 'opacity-0'}
          `
          }>
            <div className="
          translate
          h-full
          lg:h-auto
          md:h-auto
          border-0
          rounded-lg
          shadow-lg
          relative
          flex
          flex-col
          w-full
          bg-white
          outline-none
          focus:outline-none
          ">
              {/* HEADER */}
              <div className="
            flex
            items-center
            p-6
            rounded-t
            justify-center
            relative
            border-b-[1px]
            ">
            
            
                <button className='
              p-1
              sm:uborder-0
              hover:opacity-70
              transition
              absolute
              left-9
              lg:border
              ' >
                  <IoMdClose size={16} />
                </button>
                <div className='
                 text-[1rem] font-black
                '>
                  {title}
                </div>
              </div>
              {/* BODY */}
              <div className='
              relative
              flex-auto
              p-6
              '>
                {body}
              </div>
              {/* FOOTER */}
              <div className='flex flex-col gap-2 p-6'>
                <div className='flex flex-row gap-4'>
              {secondaryAction && secondaryActionLabel && (
                <Button 
                onClick={handleSubmit}
                disabled={!disabled}
                label={'Error'}
                icon={IoMdClose} 
                outline
                
                />
              )}
                

                <Button 
                onClick={handleSubmit}
                disabled={disabled}
                label={actionLabel}
                icon={IoMdClose} 
                
                />
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Modal
