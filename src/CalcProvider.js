import React, { useState } from 'react'

const CalcContext = React.createContext({
    operation: null,
    setOperation: () => {}
})

const CalcProvider = ({ children }) => {
    const [operation, setOperation] = useState(null)
    const value = { operation, setOperation }
    return (    
        <CalcContext.Provider value={value}>
            { children }
        </CalcContext.Provider>
    )
}

export const useCalcContext = () => React.useContext(CalcContext)

export default CalcProvider