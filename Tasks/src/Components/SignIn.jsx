import "./Signin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoReddit } from "react-icons/io5";


function Signin() {
  

  return (
   <div id="Box">
  
 
   
    <form style={{padding:"30px"}} id="form"> 
    <p id="title">Sign in </p>
  <div className="form-group">
    <input type="email" className="form-control fi" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autoFocus="false" />
     </div>
  <div className="form-group">
    <input type="password" className="form-control fi" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn  form-control " id="Lb">Sign in</button>
  <a href="#" id="Fp">Forgot Your Password</a>
 
    
</form>
<p id="p"><div className="line"></div>
<div style={{display:"inline-block"}}>Or use</div>
<div className="line"></div></p>

<div id="iconDiv">
  <span><SlSocialFacebook size={30} id="fb"/></span>
  <span><RiTwitterXFill size={30} id="x" /></span>
  <span><FaLinkedinIn size={30} id="li"/></span>
  <span><IoLogoReddit size={30} id="reddit"/></span>
</div>

<div className="sl">
  <p id="splsg">No Account? Sign up as a :</p>
  <div id="btncontainer">
  <button className="btn btn-outline-primary">Agency</button>
  <button className="btn btn-outline-primary">Brand</button>
  <button className="btn btn-outline-primary">Partner</button>
  </div>

</div>



    
 

   </div>
  )
}

export default Signin