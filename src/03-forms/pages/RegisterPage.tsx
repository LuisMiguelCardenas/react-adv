import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    onChange,
    resetForm,
    formData,
    name,
    email,
    password1,
    password2,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          name="name"
          onChange={onChange}
          value={name}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          onChange={onChange}
          value={email}
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}

        <input
          name="password1"
          onChange={onChange}
          value={password1}
          type="password"
          placeholder="Password"
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener 6 caracteres</span>}

        <input
          name="password2"
          onChange={onChange}
          value={password2}
          type="password"
          placeholder="Repeat Password"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
