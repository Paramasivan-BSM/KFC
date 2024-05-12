// import { useContext } from "react"
// import {DataContext} from "./App" 
// export default function B(){
//     let Name = useContext(DataContext)

//     return(
//         <>
//         <h1>{Name}</h1>
//         </>
//     )
// }
// B.js


import C from "./C";
export default function B() {
  // Access the data from the context
 

  return (
    <>
      <C />
    </>
  );
}
