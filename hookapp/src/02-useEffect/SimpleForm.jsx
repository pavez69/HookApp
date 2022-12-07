import { useEffect, useState } from "react";
import {Message} from './Message'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        

        username :'strider',
        email : 'japavezcarrillo23@google.com'
    });

    const{username, email }= formState;

    const onInputChange = ({target})=> {


        const{name, value} = target;
        setformState({
            ...formState,
            [name]: value
        });
    }


    useEffect( ()=>{

        //console.log('sellamoal usefect')
    },[]);
    useEffect( ()=>{

        //console.log('formstate changed')
    },[formState]);
    useEffect( ()=>{

        //console.log('email changed')
    },[email]);


  return (
    <>
<h1>Formulario simple</h1>
<hr/>

<input

type="text"
className="form-control"
placeholder="Username"
name="username"
value={username}
onChange={onInputChange}
/>
<input

type="email"
className="form-control mt-3"
placeholder="jpavezcarrillo23@gmail.com"
name="email"
value={ email }
onChange={onInputChange}
/>

    {
        (username === 'strider2') && <Message/>
    }


    </>

 
  )
}
