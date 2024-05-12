//  import React, { createContext, useState } from 'react'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import A1 from './A1';




// const App = () => {

//  let UserLogin = createContext()

// let [ User,setUser] = useState("Hello")

//   return (
 

// <UserLogin.Provider User={User}>

// <A1/>
// </UserLogin.Provider>



//   )
// }

// export default App
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import UseContext from './Hooks/UseContext';



const App = () => {


  return (
   <>
   
   {/* <UseState /> */}
   {/* <UseEffect /> */}
   <UseContext/>
   
   </>
  );
}

export default App;
