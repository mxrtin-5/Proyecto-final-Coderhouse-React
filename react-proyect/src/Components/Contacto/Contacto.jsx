import { useState } from "react"
import { collection, where, query, addDoc, updateDoc, doc, getDoc, writeBatch, documentId, getDocs} from "firebase/firestore"
import { db } from '../../firebase/config'
import { Link, Navigate} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'
import './Contacto.css'



const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(1, "El nombre es demasiado corto")
                .max(20, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    apellido: Yup.string()
                .min(1, "La direccion es demasiado corta")
                .max(20, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    email: Yup.string()
                .email("El email es inválido")
                .required("Este campo es obligatorio"),
    telefono: Yup.string()
                .min(1, 'El telefono es demasiado corto')
                .max(20, 'El numero es demasiado largo'),
    mensaje: Yup.string()
                .min(3, 'El mensaje es demasido corto')
                .max(2000,'El mensaje es muy largo')
                .required("Este campo es obligatorio"),
})


const initialValues = {
            nombre: '',
            apellido: '',
            email:'',
            telefono:'',
            mensaje:''
}

export const Contacto = () =>{

    const [loading, setLoading] = useState(false)
    const [coments, setComents] = useState(null)



    const  handleSubmit = async (values) =>{

        setLoading(true)

        const coment = collection(db, "mensajes")

        const comentario = {
            nombre: values.nombre,
            apelido: values.apellido,
            email: values.email,
            telefono: values.telefono,
            mensaje: values.mensaje,
            fecha: new Date()

        }

        const doc = await addDoc(coment, comentario)

        setComents(doc)


        setLoading(false)
    }


    return(
        <div className="container-contact my-5">
            <h2>Contacto</h2>

            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} >
                {() => (
                    <Form className="form-contacto">
                        <div className="div-form-nombre-apellido">
                            <Field
                                placeholder="Tu nombre"
                                type="text"
                                name="nombre" />
                            <ErrorMessage className="error-msj-contact" name="nombre" component="p" />
                            <Field
                                placeholder="Apellido"
                                type="text"
                                name="apellido" />
                            <ErrorMessage className="error-msj-contact" name="apellido" component="p" />
                        </div>
                        <Field
                            placeholder="Tu email"
                            type="email"
                            name="email" />
                        <ErrorMessage className="error-msj-contact" name="email" component="p" />
                        <Field
                            placeholder="Telefono"
                            type="text"
                            name="telefono" />
                        <ErrorMessage className="error-msj-contact" name="telefono" component="p" />
                        <Field
                            placeholder="Mensaje"
                            type="textarea"
                            name="mensaje" />
                        <ErrorMessage className="error-msj-contact" name="mensaje" component="p" />
                        <div className="buttons-reset-submit">
                            <button type="submit" className="btn btn-terminar-form-contacto" disabled={loading} >Enviar</button>
                            <button type="reset" className="btn btn-terminar-form-contacto">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>


        </div>
    )
}