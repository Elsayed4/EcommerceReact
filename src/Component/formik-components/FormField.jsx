import { Field } from "formik";
import Error from "./Error";

const FormikField = ({name, type, label})=> {
    return (
        <Field name={name}>
            {
                fomrikField=> {
                    return (
                        <>
                            <label htmlFor={name} className="d-block">{label}</label>
                            <input 
                            type={type} 
                            id={name}
                            {...fomrikField.field}
                            defaultChecked={fomrikField.field.value}
                            />
                            <Error name={name} />
                        </>
                    )
                }
            }
        </Field>
    )
}
export default FormikField