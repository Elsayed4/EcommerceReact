import {Formik, Form, Field, FieldArray} from "formik"
import './Regiter.css'
import * as yup from "yup"
import FormField from "../formik-components/FormField"
const Register = ()=> {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        active: false,
        gender:[],
        hoppies: [],
    }
    const onSubmit = (values)=> console.log(values)
    const validationSchema= yup.object({
        username: yup.string().required("this field is required!"),
        email: yup.string().email("please enter a vaild email address!").required("this field is required!"),
        password: yup.string().required("this field is required!"),
        confirm: yup.string().required().oneOf([yup.ref("password")], "please make the password the same!"),
        active: yup.bool().oneOf([true], "please be active")
    })
return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} 
    validationSchema={validationSchema} >
        {
            formik=> {
                return(
                    <Form className="container  mt-4">
                    <div class="formele">
                        <FormField 
                            type="text"
                            name="username"
                            label="username"
                        />
                        <FormField 
                            type="email"
                            name="email"
                            label="email"
                        />
                        <FormField 
                            type="password"
                            name="password"
                            label="password"
                        />
                        <FormField 
                            type="password"
                            name="confirm"
                            label="confirm password"
                        />
                    <div class="form-check">
                            <input class="form-check-input" type="checkbox" onChange={formik.handleChange} defaultChecked={formik.values.active} id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Active
                            </label>
                            {
                                formik.errors.active&& formik.touched.active &&(
                                    <div className="text-danger">{formik.errors.active}</div>
                                )
                            }
                        </div> 
                        <FieldArray nameName="hoppies">
                            {
                                ({ push, remove})=> {
                                    return(
                                        <>
                                            <button className="btn btn-primary" onClick={()=> push({hoppy: ""})}>
                                                Add Hoppy
                                            </button>
                                            {
                                                formik.values.hoppies.length > 0 &&
                                                formik.values.hoppies.map((hoppy, index)=> {
                                                    return(
                                                        <>
                                                            <FormField 
                                                                type="text"
                                                                name={`${hoppy.hoppy}name`}
                                                                label={`${hoppy.hoppy}name`}
                                                            />
                                                            <button onClick={()=> remove(index)}>
                                                                x
                                                            </button>
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                }
                            }
                        </FieldArray>
                        </div>
                        </Form>
                )
            }
        }
    </Formik>
)
}
export default Register