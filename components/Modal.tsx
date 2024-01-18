import React, { useCallback } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handelClose = useCallback(() => {
    if (disabled) return;
    onClose();
  }, [onClose, disabled]);

  const handelSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit;
  }, [disabled, onSubmit]);

  if (!isOpen) return null;
  return (
    <>
      <div
        className=" flex justify-center items-center overflow-x-hidden overflow-y-auto 
      fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70
      "
      >
        <div className="relative w-full lg:w-3/6 my-auto lg:max-w-3xl ">
          Hello
        </div>
      </div>
    </>
  );
};

export default Modal;
