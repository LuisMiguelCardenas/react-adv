import { Formik, Form } from "formik";
import * as Yup from "yup";

//import { MyTextInput } from '../components/MyTextInput';
//import { MySelect } from '../components/MySelect';
//import { MyCheckbox } from '../components/MyCheckbox';
import { MyCheckbox,MySelect,MyTextInput} from '../components'

export const FormikAbstractation = () => {


  return (
    <div>
      <h1>Formik Abstractation </h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de terner 15 caractetres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de terner 15 caractetres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("el correo no tiene un formato válido")
            .required("Requerido"),
          terms: Yup.boolean()
          .oneOf([true],"debe de aceptar terminos y condiciones"
          ),
          jobType: Yup.string()
          .required("Requerido")
          .notOneOf(['it-jr'], 'Esta opción no es permitoda')
          
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName"/>
            <MyTextInput label="Last Name" name="lastName"/>
            <MyTextInput label="Email address" name="email"/>


            <MySelect label="Job type" name='jobType'>
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
