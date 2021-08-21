import React ,{useState,useEffect,useContext,useRef}from 'react';
import './CSS/Register.css';
import Axios from 'axios';
import validation from './validation';
import {GlobalContext} from '../App';
const Login=()=>{

  const [values,setValues]=useState({
    name:"",
    email:"",
    password:"",
  })
const [errors,setErrors]=useState({});
const url = `https://artwork-gallery-app1.herokuapp.com/auth/login`;
const { setUserId } =useContext(GlobalContext);
const inputRef= useRef(null);
useEffect(()=>{
inputRef.current.focus()
},[])
  const handleChange=(e)=>{

    const newdata = { ...values };
    newdata[e.target.name] = e.target.value;
    setValues(newdata);
    console.log(newdata);
  }

  
  const handleFormSubmit=(e)=>{
    e.preventDefault();
 
    setErrors(validation(values));
   
    Axios.post(url, {
      name: values.name,
      email: values.email,
      password: values.password,
    }).then((res) => {
      console.log(res.data);
      setUserId(res.data._id);
    });

    
   
   }
  
  return(

    <div className="center">
    <h1>Login</h1>
    <form  values={values} onSubmit={handleFormSubmit} >
      <div className="txt_field">
        <input type="text" name="email" value={values.email} onChange={handleChange} ref={inputRef} />
      {errors.email && <div className="errorMsg">{errors.email}</div>}
        <span></span>
        <label>Email</label>
      </div>
      <div className="txt_field">
        <input  type="password" name="password" value={values.password} onChange={handleChange} />
      { errors.password && <div className="errorMsg">{errors.password}</div>}
        <span></span>
        <label>Password</label>
      </div>
      {/* <div className="pass">Forgot Password?</div> */}
      <input type="submit"  value="Login" />
      <div className="signup_link">
        Not a a member? <a href="/register">Register</a>
      </div>
    </form>
  </div>

    );
}
export default Login;