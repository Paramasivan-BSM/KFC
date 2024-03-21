import React from 'react'
import {  useForm } from 'react-hook-form';


const Form = () => {


let {register,handleSubmit,formState:{errors}} = useForm()

let sendinfo = (Data)=>{
console.log(Data);
}



  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Simple Form
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(sendinfo)}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" name='UN' {...register("UN",{required:true})} />
                {errors.UN && <span style={{color:"red"}}>Fillout This</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" name='mail' {...register("mail",{required:true})}/>
                {errors.mail && <span style={{color:"red"}}>Fillout This</span>}
              </div>
              <div className="form-group">
                <label htmlFor="channel">Channel</label>
                <input type="text" className="form-control" id="channel" placeholder="Enter your channel" name='Channal'{...register("Channal",{required:true})} />
                {errors.Channal && <span style={{color:"red"}}>Fillout This</span>}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Form
