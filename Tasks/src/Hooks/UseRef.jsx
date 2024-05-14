
import React,{useEffect, useRef} from 'react'

export const UseRef = () => {

  let style = {
    color:"red",
    background:"black"
  }

let refstate = useRef(style)

let size = ()=>{

div.current.setAttribute("class","A");
div.current.setAttribute("id","B");

console.log(div);
    
}
let div = useRef();



  return (
    <>
        <div ref={div}>UseRef</div>
    <button  onClick={size}></button>
    {div.current && <h1>Welcome buddy!  </h1>}
    </>

  )
}
