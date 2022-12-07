import {useEffect} from 'react'

export const Message = () => {

  useEffect(() => {

    window.addEventListener('mousemove', (event) =>{

      console.log(event.x, event.y)
    })
   
  
    return () => {
     
    }
  }, [])
  



  return (
    <>
    <h1>el usuario ya existe!</h1>

    </>
  )
}
