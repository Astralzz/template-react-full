import React, { DetailedHTMLProps } from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";

/**
 * Props for the component
 */
interface InputDefaultProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
  regex?: RegExp;
  errorMessage?: string;
}

/**
 * Default input.
 *
 * @return {JSX.Element}
 */
const InputDefault: React.FC<InputDefaultProps> = ({
  name,
  label,
  regex,
  errorMessage = "Formato inválido",
  ...props
}) => {
  // Formik context hooks
  const { values, setFieldError, setFieldTouched } = useFormikContext<{
    [key: string]: string;
  }>();

  // Custom validation function
  const validate = React.useCallback(
    (value: string) => {
      // ? Vació
      if (!value || value.length === 0) return "Campo requerido";

      // ? Regex validation
      if (regex && !regex.test(value)) return errorMessage;

      // No errors
      return undefined;
    },
    [errorMessage, regex]
  );

  // Handle field blur event
  const handleBlur = React.useCallback(() => {
    // Validate field on blur event
    setFieldTouched(name, true);
    // Get error from validation function and set it to field error if exists
    const error = validate(values[name]);
    // ? Error detecte
    if (error) setFieldError(name, error);
  }, [name, setFieldError, setFieldTouched, validate, values]);

  return (
    <div className="space-y-2">
      {/* Label of element */}
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {/* Input element */}
      <Field
        name={name}
        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onBlur={handleBlur}
        {...props}
      />
      {/* Error message */}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default InputDefault;
