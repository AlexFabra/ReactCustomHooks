import {useState} from 'react'

export const useCounter = (initialState=0) => {
    //la base de nuestro customhook es un hook basico (useState)
  const [state,setState] = useState(initialState)
  //tiene funciones propias
  const increment = () => { setState(state+1)};
  const decrement = () => {setState(state-1)};
  const reset = () => {setState(initialState)};
  //esto es lo que podremos extraer de este hook, así como extraemos state y setState de useState.
  return {state,increment,decrement,reset};
 }
