import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

export const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState("");

    const navigate = useNavigate()

    const { signup } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
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
            {error &&  console.log(error)}
                        <form
                            className="container formulario-register"
                            onSubmit={handleSubmit}
                        >
                            <label className="label-register" htmlFor="email">Email</label>
                            <input
                                className="form-register"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@company.com"
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />

                            <label className="label-register" htmlFor="password">Password</label>
                            <input
                                className="form-register"
                                type="password"
                                placeholder="password"
                                name="password"
                                id="password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />

                            <button className="register-button" type="submit">Register</button>
                        </form>
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