import { ErrorMessage } from "formik";
const Error = ({name})=> {
    return(
        <ErrorMessage name={name}>
            {
                error=> (
                    <div className="text-danger">
                        {error}
                    </div>
                )
            }

        </ErrorMessage>
    )
}
export default Error 