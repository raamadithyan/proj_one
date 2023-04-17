"use client";
import { isPageStatic } from "next/dist/build/utils";
import { useState, useEffect, useCallback } from "react";

interface Modelprops {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
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
    secondaryLabel }
) => {
  const [showModel, setShowModel] = useState(isOpen)
  useEffect(() => {
    setShowModel(isOpen)
  }, [isOpen])

  const handleOpen = useCallback(
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
      
      ">CodeSpaces v2</div>
      </div>
    </>
  )
}


export default Modal



