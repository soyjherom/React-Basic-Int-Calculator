const EqualsResetPad = ({setOperation}) => {
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
        <button 
            onClick={()=>{
                setOperation('AC')
            }}
            className="button-equals">AC</button>
        <button 
            onClick={()=>{
                setOperation('=')
            }}
            className="button-equals">=</button>
        </div>
    )
}

export default EqualsResetPad