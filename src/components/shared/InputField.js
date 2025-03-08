import React from "react";
import { Field, ErrorMessage } from "formik";

const InputField = ({ label, type, name, placeholder }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <Field type={type} name={name} id={name} placeholder={placeholder} className= "form-control" />
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);

export default InputField;