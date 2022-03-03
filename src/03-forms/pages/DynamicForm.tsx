import formJson from "../data/custom-form.json";
import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [keys: string]: any } = {};
const requiredFields: { [keys: string]: any } = {};


for (const input of formJson) {
  initialValues[input.name] = input.value;

  if( !input.validations ) continue

let schema = Yup.string()

  for ( const rule of input.validations ){
    if ( rule.type === 'required' ){
      schema = schema.required('Este campo es requerido')
    }

    if ( rule.type === 'minLength'){
      schema = schema.min((rule as any ).value || 2, `Mínimo de ${(rule as any ).value || 2} caracteres`)
    }
  
    if ( rule.type === 'email'){
      schema = schema.email('debe ser un email valido')
    }
  }

  requiredFields[input.name] =schema;
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={ validationSchema }
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return <MySelect key={name} label={label} name={name} >
                  <option value="">Select an option</option>
                  {
                    options?.map(({ label, id}) => (
                      <option key= { id } value={ id }>{ label }</option>
                    ))
                  }
                </MySelect>;
              }

              <span>Type: {type} no es soportado</span>;
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
