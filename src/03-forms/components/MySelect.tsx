import { ErrorMessage, useField } from 'formik'
import React from 'react'


interface Props {
    label: string,
    name: string,
    placeholder?:string;
    [ x:string ]:any;
}



export const MySelect = ( { label, ...props }:Props ) => {

const [ field] =  useField( props )
 

  return (
    <>
    <label htmlFor={ props.name || props.id }>{ label }</label>
    <select { ...field } { ...props } />
    <ErrorMessage name={props.name} component="span" />

    </>
  )
}



