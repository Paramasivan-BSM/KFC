import React, { useReducer } from 'react';



const Reducer = () => {

    let Data = {
        count:0
    }


    let reducer = (state,action)=>{

        switch(action.type){
            case "inc":
                return { count: state.count + 1 };
                case 'dec':
                    return { count: state.count - 1 };
                  default:
                    throw new Error();
        }

    }

   let [state,dispatch] = useReducer(reducer,Data)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"inc"})}>Ince</button>
      <button onClick={()=>dispatch({type:"dec"})}>Dece</button>
    </div>
  )
}

export default Reducer
