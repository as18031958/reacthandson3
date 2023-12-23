import React, { useState } from 'react'
import { Toggle } from './Toggle'
import './Style.css'

export const HandsonThree = () => {

    const [name,setName] = useState("");
    const [dept,setDept] = useState("");
    const [rate,setRate] = useState("");
    const [data,setData] = useState([]);
    const [click,setClick] = useState(true);

    const handleChange = (e)=>{
        switch(e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'departement':
                setDept(e.target.value);
                break;
            case 'rating':
                setRate(e.target.value);
                break;
                default:
                    
            
        }
    }

    const handleClick=()=>{
        const obj={
            name:name,
            dept:dept,
            rate:rate,

        }
    
    const value = [...data,obj]
    console.log(value,"value")
    setData(value)
    setClick(false)
    }
    const toggle=()=>{
        setClick(!click)
    }
  return (
    <div>
        {click?(
            <>
            <div class="main">
            <label class="one">Name</label>
            <input class ="two" name="name" type='text' placeholder='Enter your name' onChange={handleChange} />
            <label class="one">Departement</label>
            <input class ="two" name="departement" type='text' placeholder='Enter your Departement'onChange={handleChange} />
            <label class="one">Rating</label>
            <input class ="two" name="rating" type='number' placeholder='please rate us'onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
            </div>
            </>
        ):(
        
        <Toggle value={data} tog={toggle}/>
        )}
    </div>
  )
}
