import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputDefault from "../inputs/InputDefault";

/**
 * Validations Formik
 *
 */
const validationSchema = Yup.object().shape({
  asunto: Yup.string()
    .required("El asunto es obligatorio")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,50}$/,
      "Asunto inválido (solo letras y espacios)"
    ),
  message: Yup.string()
    .required("El mensaje es obligatorio")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,250}$/,
      "Mensaje inválido (solo letras y espacios)"
    ),
});

/**
 * Email Form element.
 *
 * @return {JSX.Element}
 */
const EmailForm: React.FC = () => {
  // Action form
  const handleSubmit = React.useCallback(
    (
      values: { asunto: string; message: string },
      {
        setSubmitting,
        resetForm,
      }: {
        setSubmitting: (isSubmitting: boolean) => void;
        resetForm: () => void;
      }
    ): void => {
      // Enviar correo
      console.log("Email enviado:", values);

      setTimeout(() => {
        alert("Email enviado ✅");
        setSubmitting(false);
        resetForm(); // Restart the form
      }, 2000);
    },
    []
  );

  return (
    <Formik
      initialValues={{ asunto: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {/* Está enviando, Es válido, Sucio */}
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="m-9 text-sm max-w-sm mx-auto p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          {/* Asunto */}
          <InputDefault name="asunto" label="Asunto" maxLength={45} required />
          {/* Message */}
          <InputDefault
            name="message"
            label="Mensaje"
            maxLength={250}
            required
          />
          {/* Button action */}
          <button
            type="submit"
            disabled={isSubmitting || !(isValid && dirty)}
            className="w-full mt-4 hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
