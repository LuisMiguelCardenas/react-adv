import React from "react";
import { FormikErrors, useFormik } from "formik";

interface Formvalues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = (values: Formvalues) => {

    const errors: FormikErrors<Formvalues> = {};

    if ( !values.firstName){
      errors.firstName = 'Required';
    }else if ( values.firstName.length > 15 ){
      errors.firstName = 'Must be 15 caracters or less'
    }

    if ( !values.lastName){
      errors.lastName = 'Required';
    }else if ( values.lastName.length > 10 ){
      errors.firstName = 'Must be 10 caracters or less'
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validate: validate,
  });

  return (
    <div>
      <h1>Formik Basic Tutorial </h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          onBlur = { handleBlur }
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />

        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

        <label htmlFor="firstLast">Last Name</label>
        <input
          type="text"
          name="lastName"
          onBlur = { handleBlur }
          onChange={handleChange}
          value={values.lastName}
        />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          onBlur = { handleBlur }
          onChange={handleChange}
          value={values.email}
        />
        
        { touched.email && errors.email && <span>{ errors.email }</span> }

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
