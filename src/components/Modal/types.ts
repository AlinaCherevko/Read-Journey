import { ReactNode } from "react";

export type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};
