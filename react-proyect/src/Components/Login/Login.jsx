import { Field, Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { useState } from "react"
import * as Yup from 'yup'
import './Login.css'





const schema = Yup.object().shape({
    email: Yup.string()
        .required("Este campo es obligatorio")
        .email("El email es inválido"),
    password: Yup.string()
        .required("Este campo es obligatorio")
})


export const Login = () => {

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (values) => {

        setLoading(true)


        const user = {
            email: values.email,
            password: values.password

        }

        console.log(values)

        setLoading(false)
    }

    return (
        <section className="login-section">
            <div className="div-form-login">
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={schema}
                >
                    {
                        () => (
                            <Form className="container formulario-login">
                                <label htmlFor="email">Email</label>
                                <Field className="form-login" placeholder="Ingrese su Email" type="email" name="email" id="email" />
                                <label htmlFor="password">Password</label>
                                <Field className="form-login" placeholder="Contraseña" type="password" name="password" id="password" />


                                <div className="flex items-center justify-center gap-20 mt-10">
                                    <button
                                        className="button-login text-white font-bold py-1.5 px-4 rounded "
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                    <a
                                        className="a-login align-baseline font-bold text-sm"
                                        href="#!"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
            <div className="div-google-login">

                <button 
                    className="button-login-google"
                >
                    Google login
                </button>
                <p className="my-4 flex justify-between px-3">
                    Don't have an account?
                    <Link to="/register" className="link-to-register">
                        Register
                    </Link>
                </p>


            </div>
        </section>
    )
}