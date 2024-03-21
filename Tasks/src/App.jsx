import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
// import Signin from './Components/SignIn'
// import UserInfoCard from './Components/UserInfoCard';
import Form from './Components/Form';
import { useState } from 'react';

function App() {


//   let [show,setshow]=useState()

//   function Fcard(UD){

//  return setshow(UD)


//   }
//   console.log(show);

  return (
    <>
 {/* <Signin  Fcard={Fcard} />
 <UserInfoCard  show={show}/> */}
 <Form />
    </>
  )
}

export default App
