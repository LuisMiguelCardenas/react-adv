import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de tres caractertes o más")
            .max(15, "El nombre debe de ser de menos de 15 caractertes ")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo")
            .required("Requerido"),
          password1: Yup.string()
            .required("Requerido")
            .min(6, "El password debe de ser de minimo 6 carácteres"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput 
            label="Nombre" 
            name="name"
            placeholder="Antonia"
            />
                        <MyTextInput 
            label="Email" 
            name="email"
            type="email"
            placeholder="Email"
            />
                                    <MyTextInput 
            label="Password" 
            name="password1"
            type="password"
            />
                                                <MyTextInput 
            label="Repeat password" 
            name="password2"
            type="password"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={formik.handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
