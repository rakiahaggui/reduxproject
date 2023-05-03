import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{increment,decrement,reset,ajoutby5} from './ListTask'
const Counter=() =>{

const{counter}= useSelector{{state}=>state.counter}
const Dispatch=useDispatch()
  return (
    <div>
      <h1>Counter:</h1>
      <button onClick={}>increment</button>
      <button >decrement</button>
      <button >reset</button>
      <button >test</button>
    </div>
  )
}

export default Counter;
