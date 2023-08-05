import { Field, Form, Formik } from "formik"
import { useState } from "react"


export const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        console.log(event);
    }

    return (
        <section>
            <Formik>
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field
                    onChange={handleChange} 
                    type="email" 
                    name="email" 
                    placeholder="example@company.com" 
                    />

                    <label htmlFor="password">Password</label>
                    <Field 
                    onChange={handleChange} 
                    type="password" 
                    placeholder="password" 
                    name="password" 
                    id="password" />
                </Form>

                <button>Register</button>

            </Formik>
        </section>
    )
}