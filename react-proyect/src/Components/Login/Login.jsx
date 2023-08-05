import { Field, Form, Formik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'





const schema = Yup.object().shape({
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("El email es inválido"),
    password: Yup.string()
                .required("Este campo es obligatorio")
})


export const Login = () =>{

    const [loading, setLoading] = useState(false)

    const  handleSubmit = async (values) =>{

        setLoading(true)

        const usuarios = collection(db, "mensajes")

        const user = {
            email: values.email,
            password: values.password

        }

        const doc = await addDoc(coment, comentario)

        setComents(doc)

        console.log(values)

        setLoading(false)
    }

    return(
        <section>
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={schema}
            >
                {
                    ()=>(
                        <Form>
                            <Field placeholder="Ingrese su Email" type="email" name="email" id="email" />
                            <Field placeholder="Contraseña" type="password" name="password" id="password"/>
                        </Form>
                    )
                }
            </Formik>
        </section>
    )
}