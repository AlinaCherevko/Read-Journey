import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { ReactNode } from "react";

export type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const rootModal = document.querySelector("#modal-root");

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const closeModalByEsc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      onClose();
    };

    document.addEventListener("keydown", closeModalByEsc);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", closeModalByEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onClose();
  };

  return createPortal(
    <div className="backdrop" onClick={handleBackdropClick}>
      {children}
    </div>,
    rootModal!
  );
};

export default Modal;
