import { useContext, useState } from "react"
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


    const  handleSubmit = (values) =>{
        values.preventDefault()
        setLoading(true)

        console.log(values)

        setLoading(false)
    }


    return(
        <div className="container-contact my-5">
            <h2>Contacto</h2>

            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} >
                {(values, handleChange, handleReset, handleSubmit)=> (
                        <Form onSubmit={handleSubmit} onReset={handleReset} className="form-contacto">
                            <div className="div-form-nombre-apellido">
                                <Field
                                    placeholder="Tu nombre"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.nombre}
                                    name="nombre"/>
                                <ErrorMessage className="error-msj-contact" name="nombre" component="p"/>
                                <Field 
                                    placeholder="apellido" 
                                    type="text" 
                                    value={values.apellido}
                                    onChange={handleChange} 
                                    name="apellido"/>
                                <ErrorMessage className="error-msj-contact" name="apellido" component="p"/>
                            </div>
                                <Field 
                                    placeholder="Tu email" 
                                    type="email" 
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"/>
                                <ErrorMessage className="error-msj-contact" name="email" component="p"/>
                                <Field 
                                    placeholder="telefono" 
                                    type="text" 
                                    value={values.telefono}
                                    onChange={handleChange} 
                                    name="telefono"/>
                                <ErrorMessage className="error-msj-contact" name="telefono" component="p"/>
                                <Field 
                                    placeholder="mensaje"  
                                    type="textarea" 
                                    value={values.mensaje}
                                    onChange={handleChange} 
                                    name="mensaje"/>
                                <ErrorMessage className="error-msj-contact"name="mensaje" component="p"/>
                                    <div className="buttons-reset-submit">
                                        <button className="btn btn-terminar-form-contacto" disabled={loading} >Enviar</button>
                                        <button type="reset" className="btn btn-terminar-form-contacto">Reset</button>
                                    </div>

                        </Form>
                )}
                    
            </Formik>

        </div>
    )
}