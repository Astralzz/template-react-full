import React from "react";
import { useReduxSelector } from "../redux/hook";
import ModalDefault from "../components/modals/ModalDefault";

/**
 * Pagina para probar el modal
 *
 * @returns {JSX.Element}
 */
const ModalPage: React.FC = () => {
  // Variables redux
  const isThemeDark = useReduxSelector((state) => state.stateTheme.isThemeDark);

  // Variables
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mt-8 bg-primary-100 dark:bg-primary-500 text-gray-900 dark:text-gray-100">
      {/* Contenido */}
      <h1 className="text-xl font-bold">Modal View</h1>

      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn bg-gray-600 text-sm text-white p-2 rounded-3xl mt-4 hover:bg-gray-700 hover:shadow-md hover:scale-105 transition-transform duration-200"
      >
        Open modal
      </button>

      {/* Modal */}
      <ModalDefault
        statusModal={{ isOpen, closeModal: () => setIsOpen(!isOpen) }}
        title="Header Modal"
        closeOnBackdropClick
        isThemeDark={isThemeDark}
      >
        <div className="p-4 mx-4 my-16">
          <p>Hello word</p>
        </div>
      </ModalDefault>
    </div>
  );
};

export default ModalPage;
