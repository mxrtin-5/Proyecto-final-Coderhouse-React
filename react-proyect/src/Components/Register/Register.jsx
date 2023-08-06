import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import './Register.css'

export const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState("");

    const navigate = useNavigate()

    const { signup } = useAuth()

    const handleSubmit = async () => {
        setError("");
        try {
            await signup(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <section className="section-form-register">
            <div className="div-form-register">
                {error && <p>{error}</p>}

                <Formik initialValues={user}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="container formulario-register">
                            <label className="label-register" htmlFor="email">Email</label>
                            <Field
                                className="form-register"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@company.com"
                            />

                            <label className="label-register" htmlFor="password">Password</label>
                            <Field
                                className="form-register"
                                type="password"
                                placeholder="password"
                                name="password"
                                id="password"
                            />

                            <button onClick={handleSubmit} className="register-button" type="submit">Register</button>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="login-register">
                <p className="p-login-acc">
                    Already have an Account?
                    <Link className="login-link" to='/user'>
                        Login
                    </Link>
                </p>
            </div>


        </section>
    )
}