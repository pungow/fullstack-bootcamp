
const MensajeModule  = (props) => {
    return <h1 style={{color: props.color}}>
            HOLA MUNDO REACT desde modulo + 
            {props.message}
        </h1>
}

export default MensajeModule 