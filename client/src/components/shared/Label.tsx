import { FieldError } from "react-hook-form";
import { FloatingLabel } from "./AnimatedLabel";


interface ILabel {
  name: string;
  error: FieldError | undefined;
  label: string;
  customClass: string;
}

export const Label = ({ error, label, customClass, name }: ILabel) => {
  let message;
  if (error) {
    message = error.message;
  }
  return (
    <>
      <FloatingLabel customClass={customClass}  name={label} />

      {error && (
        <label className={`label-error`} htmlFor={name}>
          {error.message}
        </label>
      )}
    </>
  );
};