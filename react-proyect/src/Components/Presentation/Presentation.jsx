import './Presentation.css'


export const Presentation = () =>{


    return(
        <section className='contenedor-portada'>
            <div id='img-portada' className="contenedor-portada">
                
                <img src="/descarga_ml_resize_x4.jpg" className='literalmente-la-imagen' />
                    <div className='contenedor-titulo-presentacion'>
                        <h1 className='titulo-presentacion' >Revolution</h1>
                        <p className='subtitulo-presentacion'>Precision and Performance in Motion:<br/> Soluciones de Rodamientos Innovadores para Impulsar tu Éxito</p>
                    </div>
                
            </div>
        </section>
    )
}