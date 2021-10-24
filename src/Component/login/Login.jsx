import { useFormik } from "formik";
import * as yup from "yup";

const Login = ()=> {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: true,
        },
        onSubmit: (values) => console.log(JSON.stringify(values)),
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().required(),
        }),
    });
    return (
        <div className="container text-center mt-5">
        <form  onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email" className="d-block">email</label>
                        <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                        {
                            formik.errors.email&& formik.touched.email&&(
                                <div className="text-danger">
                                    {formik.errors.email}
                                </div>

                            )
                        }
                    </div>
                    <div className="mt-2">
                        <label htmlFor="password" className="d-block">password</label>
                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                        {
                            formik.errors.password&& formik.touched.password&&(
                                <div className="text-danger">
                                    {formik.errors.password}
                                </div>

                            )
                        }
                    </div>
                    <div className="mt-2">
                        <label htmlFor="rememberMe" style={{ display: "block" }}>
                            remember me
                        </label>
                        <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        defaultChecked={formik.values.rememberMe}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        submit
                    </button>
                </form>

        </div>
            );
};
export default Login;
