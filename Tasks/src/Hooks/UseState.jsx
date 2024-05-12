import React from 'react';
import { useState } from 'react';

const UseState = () => {
    let [Value,setValue] = useState(false)
    let [FormD,setFormD] = useState(
        {
            Name:"",
            City:""
        }
    )
console.log(FormD);
  return (
    <div>
        {Value &&  <h1>Hello Shiva!</h1>}
     
      <button onClick={()=>{setValue(!Value)}}>Click</button>



<form action="">
    <input type="text" onChange={(e)=>setFormD({...FormD,Name:e.target.value})}/>
    <select name="" id="" onChange={(e) => setFormD({ ...FormD, City: e.target.value })} value={FormD.City}>
  <option value="" disabled selected>Select a city</option>
  <option value="Chennai">Chennai</option>
</select>

    </form>


    </div>




  )
}

export default UseState
