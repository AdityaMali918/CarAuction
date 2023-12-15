import React from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./Signupvalidation";
import { useState } from "react";
import axios from 'axios';
import ResponsiveAppBar from "./ResponsiveAppBar";
import './sign.css';

function Signup(){

    const [errors,setErrors]=useState({})

    const [values,setValue]=useState({
        name:"",email:"",password:""
    })

    const navigate =useNavigate();

    const handleInput=(event)=>{
   setValue(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }

  const  handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
    if(errors.name ==="" && errors.email==="" && errors.password===""){
axios.post('http://localhost:8081/signup',values)
.then(res=> {navigate('/')})
.catch(err=> console.log(err))
    }
    }


    return(<>
    <ResponsiveAppBar/>
    <div className="outerbox">
            <div className="innerbox">
            <h2>Sign-Up</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className="innerbox">
                <label htmlFor="Name">Name</label>
                <input type="text"onChange={handleInput}  name="name" id="Name" placeholder="Name" />
                {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>
            <div className="innerbox">
                <label htmlFor="email">Email</label>
                <input onChange={handleInput}  type="email" name="email" id="email" placeholder="Email" />
                {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="innerbox">
                <label htmlFor="password">Password</label>
                <input onChange={handleInput} type="password" name="password" id="password" placeholder="Password"/>
                {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-success">Sign up</button>
            <p></p>
            <Link to='/' className="btn btn-default border">Log in</Link>
            </form>
            </div>
        </div>
        </>)
}

export default Signup
