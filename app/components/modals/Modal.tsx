"use client";
import { isPageStatic } from "next/dist/build/utils";
import { useState, useEffect } from "react";

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
  return (
    <div>modal</div>
  )
}


export default Modal



