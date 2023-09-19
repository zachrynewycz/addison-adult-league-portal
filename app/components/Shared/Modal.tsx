import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-10" />
            <div className="absolute bg-white p-5 rounded-lg shadow-lg z-10">{children}</div>
        </div>
    );
};

export default Modal;
