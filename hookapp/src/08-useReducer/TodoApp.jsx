import { useReducer } from "react"


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,

    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,

    }


]

export const TodoApp = () => {


    const [state, dispatch] = useReducer(reducer, initialState )




  return (
    <>

            <h1>TodoApp</h1>


            <hr />

            <ul>
                <li> Item 1 </li>
                <li> Item 2 </li>
                <li> Item 3 </li>

            </ul>


    </>
  )
}
