import './App.css';
import { useState, useEffect } from 'react'
import NumberPad from './NumberPad.js'
import Output from './Output.js'
import OperationPad from './OperationPad.js'
import EqualsResetPad from './EqualsResetPad.js'

function App() {
  const [numberString, setNumberString] = useState('')
  const [number, setNumber] = useState(0)
  const [result, setResult] = useState(0)
  const [operation, setOperation] = useState(null)
  const [lastOperation, setLastOperation] = useState(null)
  const [output, setOutput] = useState('')

  useEffect(()=>{
    if(numberString && numberString !== '') {
      setNumber(parseInt(numberString))
    }
  },[numberString, setNumber])

  useEffect(()=>{
    if(number) setOutput(number.toString())
  },[number])

  useEffect(()=>{
    if(result) setOutput(result)
  }, [result])

  useEffect(()=>{
    const execLastOperation = () => {
      if(lastOperation){
        switch(lastOperation){
          case '+':
            setResult(result + number)
            break
          case '-':
            setResult(result - number)
            break
          case '*':
            setResult(result * number)
            break
          case '/':
            setResult(result / number)
            break
          default:
            break
        }
      }else setResult(number)
    }
    if(operation){
      execLastOperation()
      switch(operation){
        case 'AC':
          setResult(0)
          setNumber(0)
          setNumberString('')
          setLastOperation(null)
          setOperation(null)
          setOutput('')
          break
        case '=':
          setLastOperation(operation)
          break
        default:
          setNumber(0)
          setNumberString('')
          setLastOperation(operation)
          setOperation(null)
          break
      }
    }
  },[operation, 
    lastOperation, 
    number, 
    result])

  return (
    <div className="App">
      <Output output={output}/>
      <div style={{
        display: 'flex', 
        flexDirection: 'row'}}>
        <NumberPad number={numberString} setNumber={setNumberString}/>
        <OperationPad setOperation={setOperation}/>
      </div>
      <EqualsResetPad setOperation={setOperation}/>
    </div>
  );
}

export default App;
