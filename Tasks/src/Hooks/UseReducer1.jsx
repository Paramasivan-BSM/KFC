import React from 'react'
import { useReducer } from 'react'

const UseReducer1 = () => {

    let reduce = (state,action)=>{
        switch(action.type){
            case "add":
                return{
                    ...state,count:state.count+1

                }
                case "sub":
                    return{
                        ...state,count:state.count-1
                    }
        }

    }


let [state,dispatch] = useReducer(reduce,{count:0});

  return (
    <div>
        <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"add"})}></button>
      <button onClick={()=>dispatch({type:"sub"})}></button>
    </div>
  )
}

export default UseReducer1
