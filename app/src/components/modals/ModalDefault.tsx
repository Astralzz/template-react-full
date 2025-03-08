// components/Modal/ModalDefault.tsx
import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../../styles/modules/Modal.module.scss";

// Props
interface ModalDefaultProps {
  children: React.ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  maxHeight?: string;
  closeOnBackdropClick?: boolean;
  isThemeDark?: boolean;
  statusModal: {
    isOpen: boolean;
    closeModal: () => void;
  };
}

/**
 * Modal por defecto
 *
 * @param {ModalDefaultProps} props
 *
 * @returns {JSX.Element}
 */
const ModalDefault: React.FC<ModalDefaultProps> = ({
  children,
  title,
  statusModal: { closeModal, isOpen },
  size = "md",
  maxHeight = "70vh",
  isThemeDark = false,
  closeOnBackdropClick = true,
}) => {
  // Variables
  const [isClosing, setIsClosing] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  // Al cerrar el modal
  const handleClose = React.useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
      setIsClosing(false);
    }, 300);
  }, [closeModal]);

  // Al hacer click en el fondo
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // ? Si se cierra al hacer click en el fondo
    if (closeOnBackdropClick && e.target === e.currentTarget) handleClose();
  };

  // Efecto para el manejo del modal
  React.useEffect(() => {
    // Evento para cerrar
    const handleKeyDown = (e: KeyboardEvent) =>
      e.key === "Escape" && handleClose();

    // ? Esta abierta el modal
    if (isOpen) {
      // Cambiamos estilos
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Evento para cerrar
      window.addEventListener("keydown", handleKeyDown);

      // Auto-focus en el primer elemento interactivo
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      // Auto-focus en el primer elemento interactivo
      if (focusableElements?.length)
        (focusableElements[0] as HTMLElement).focus();
    }

    return () => {
      // Cambiamos estilos
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isOpen]);

  // ? Si el modal no está abierto
  if (!isOpen) return null;

  return (
    <div
      className={`${styles.backdrop} ${
        isClosing ? styles.leave : styles.enter
      } flex items-center justify-center fixed inset-0 px-4`}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
      data-close-on-click={closeOnBackdropClick}
    >
      {/* Modal */}
      <div
        ref={modalRef}
        className={`w-full max-w-${size} sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 
          ${styles.modalContainer} ${
          isClosing ? styles.modalLeave : styles.modalEnter
        } 
    bg-white shadow-lg rounded-lg relative`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center border-b px-4 py-3 rounded-t-lg ${
            isThemeDark
              ? "border-gray-100 text-gray-100 bg-gray-700"
              : "border-gray-700 text-gray-900 bg-gray-300"
          }`}
        >
          {/* Título */}
          <h2 className="text-xl font-semibold" id="modal-title">
            {title}
          </h2>

          {/* Botón de cierre */}
          <button
            className="p-2 rounded-full hover:cursor-pointer hover:opacity-40 transition-colors duration-200"
            onClick={handleClose}
            aria-label="Cerrar modal"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido */}
        <div
          className={`p-3 overflow-y-auto rounded-b-lg ${
            isThemeDark
              ? "text-gray-100 bg-gray-700"
              : "text-gray-900 bg-gray-50"
          }`}
          style={{ maxHeight }}
          aria-labelledby="modal-title"
          id="modal-description"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalDefault;
