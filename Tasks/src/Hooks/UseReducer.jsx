import React from 'react'
import { useReducer } from 'react'

const UseReducer = () => {

    let reduce = (state,action)=>{

switch(action.type){
    case "add":
        return {
            ...state, count:state.count+1
        }
        case "sub":
            return {
                ...state, count:state.count-1
            }

            case "res":
                return {
                    ...state, count:state.count=0
                }
    
}


    }

let count;

let [state,dispatch] = useReducer(reduce,{count:0})

  return (
    <div>
      <button onClick={()=>dispatch({type:"add"})}></button>
      <button  onClick={()=>dispatch({type:"sub"})}></button>
      <button  onClick={()=>dispatch({type:"res"})}></button>



<h1>{state.count}</h1>

    </div>
  )
}

export default UseReducer
