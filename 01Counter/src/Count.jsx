import { useState } from "react"

 export default function Count() {

    const [counter, setCounter]  = useState(1);

    const addValue = () => {
        //counter = counter + 1
        // setCounter(prevCounter   = () => prevCounter + 1)
        // setCounter(prevCounter   = () => prevCounter + 1)
        // setCounter(prevCounter   = () => prevCounter + 1)
        // setCounter(prevCounter   = () => prevCounter + 1)
        // setCounter(counter + 1)
        if(counter <= 20){
            setCounter(counter * 2)
            // console.log(counter);
        }
        
      }
    
  
    const removeValue = () => {
        if(counter > 0 ){
            setCounter(counter - 1)
        }
     
    }

    return(

        <>
        <h1>React_with_hk</h1>
        <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
        </>

    )

 }