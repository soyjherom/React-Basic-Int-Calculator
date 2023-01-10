const OperationPad = ({
    setOperation
}) => {
    return (
        <div style={{
        marginLeft: 10
        }}>
        <div>
            <button 
                onClick={()=>{
                    setOperation('+')
                }}
                className="button-operation">+</button>
        </div>
        <div>
            <button
                onClick={()=>{
                    setOperation('-')
                }} 
                className="button-operation">-</button>
        </div>
        <div>
            <button 
                onClick={()=>{
                    setOperation('*')
                }}
                className="button-operation">*</button>
        </div>
        <div>
            <button
                onClick={()=>{
                    setOperation('/')
                }} 
                className="button-operation">/</button>
        </div>
        </div>
    )
}

export default OperationPad