import React ,{useState}from 'react';
import './CSS/Register.css';
import Axios from 'axios';
import validation from './validation';
const Register=()=>{
  const [values,setValues]=useState({
    name:"",
    email:"",
    password:"",
  })
const [errors,setErrors]=useState({});
const url = `https://artwork-gallery-app1.herokuapp.com/auth/register`;
   const handleChange=(e)=>{
    // setValues({
    //   ...values,
    //   [event.target.name]: event.target.value,
    // });

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
    });
    
   
  }
  
  return(

    <div className="center register">
    <h1>Register</h1>
    <form  values={values} onSubmit={handleFormSubmit} >
      <div className="txt_field">
        <input type="text" name="name" value={values.name} onChange={handleChange}  />
        <span></span>
        {errors.name &&  <div className="errorMsg">{errors.name}</div>}
     
        <label>Username</label>
      </div>
      <div className="txt_field">
        <input type="text" name="email" value={values.email} onChange={handleChange}  />
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
      <input type="submit"  value="Register" />
      <div className="signup_link">
        Already a member? <a href="/login">Login</a>
      </div>
    </form>
  </div>

    );
}
export default Register;