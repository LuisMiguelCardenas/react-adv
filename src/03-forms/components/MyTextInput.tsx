import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name || props.id}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
