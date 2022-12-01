import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterCustomHook = () => {




const { counter, decrement, increment, reset} = useCounter();






  return (

    <>
    <h1>counter hook custom : {counter}</h1>

    <hr />

    <button onClick={ () => increment(2)} className="btn btn-outline-success"> +1</button>
    
    <button onClick={reset} className="btn btn-outline-primary"> reset</button>
    
    <button onClick={ () => decrement(2)} className="btn btn-outline-danger"> -1</button>
    </>
  )
}
