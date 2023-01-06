import React from 'react'
import ReactDOM from 'react-dom/client'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { Padre } from './07-Tarea-Memo/Padre'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterCustomHook } from './01-useState/CounterCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp'
//import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  // <React.StrictMode>
    <TodoApp/>
  //</React.StrictMode>
)
