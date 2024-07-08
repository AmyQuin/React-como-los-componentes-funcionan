import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores} = props


    const obj = {
        backgroundColor: colorSecundario
    }
    console.log(colaboradores.length>0)

    const estiloTitulo = {borderColor: colorPrimario}


//{mostrarFormulario ? <Formulario /> : <></>}
    return <> 
        {
            colaboradores.length > 0 && 
            <section className="equipo" style={obj}>
                <h3  style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                        />) //el index es la posicion de cada elemento, cada uno tiene su propia key
                    }
                </div>
            </section>
        }
    </>
}


export default Equipo