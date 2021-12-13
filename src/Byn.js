import React from 'react'
import './App.css';
import { useState } from 'react'

const Section = () => {
    const [value, setValue] = useState(0)
   

    const reset = () =>{
        setValue(0)
    }

    
    return (
        <div>
            

            <h2>counter</h2>
            <h1> {value} </h1>
            <button className='I' onClick={ () => {setValue(value + 1)}} >increase</button>

            <button className='R' onClick={reset} >Reset</button>
            <button className='D' onClick={() =>{ setValue(value -1)}} > Decrease</button>
            

        </div>
    )
}

export default Section