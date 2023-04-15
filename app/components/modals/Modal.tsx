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
    <div className="
    flex 
    justify-content
    items-center
    overflow-x-hide
    overflow-y-auto
    
    "

    >modal</div>
  )
}


export default Modal



