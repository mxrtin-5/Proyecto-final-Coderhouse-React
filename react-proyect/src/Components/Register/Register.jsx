import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useAuth } from "../../hooks/useContext"
import './Register.css'

export const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { singup } = useAuth()


    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        singup(user.email, user.password)
    }
    return (
        <section className="section-form-register">
            <Formik initialValues={user}
            onSubmit={(values)=>{
                console.log(user);
            }}
            >
                {() => (
                    <Form onSubmit={handleSubmit} className="formulario-register">
                        <label htmlFor="email">Email</label>
                        <Field
                            onChange={handleChange}
                            className="form-register"
                            type="email"
                            name="email"
                            placeholder="example@company.com"
                        />

                        <label htmlFor="password">Password</label>
                        <Field
                            onChange={handleChange}
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
        </section>
    )
}