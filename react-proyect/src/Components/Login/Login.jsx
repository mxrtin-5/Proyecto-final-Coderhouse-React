import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import './Login.css'


export function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { login, logOut, loginWithGoogle, resetPassword } = useAuth();

    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
            await resetPassword(user.email);
            setError('We sent you an email. Check your inbox')
        } catch (error) {
            setError(error.message);
        }
    };

    console.log(user);
    const handleLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.error(error.message);
        }
    };


    return (
        <section className="login-section">
            <div className="div-form-login">

                <form className="container formulario-login" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-login" placeholder="Ingrese su Email" type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setUser({ ...user, password: e.target.value })}  className="form-login" placeholder="Contraseña" type="password" name="password" id="password" />


                    <div className="flex items-center justify-center gap-20 mt-10">
                        <button
                            onClick={handleSubmit}
                            className="button-login text-white font-bold py-1.5 px-4 rounded "
                            type="submit"
                        >
                            Sign In
                        </button>
                        <a
                            onClick={handleResetPassword}
                            className="a-login align-baseline font-bold text-sm"
                            href="#!"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>


            </div>
            <div className="div-google-login">

                <button
                    onClick={handleGoogleSignin}
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

                <button onClick={handleLogout} className="boton-log-out">LogOut</button>


            </div>

                {
                    user
                    ? <h2>Welcome {user.email}</h2>
                    :<p></p>
                }

        </section>
    )
}