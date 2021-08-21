import React,{useState}from 'react'
import Axios from 'axios';
import validation from './validation';
function useForm() {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
      });
      const handleChange=(e)=>{
       
        const newdata = { ...values };
        newdata[e.target.name] = e.target.value;
        setValues(newdata);
        console.log(newdata);
      }
    
      
     
     
  return [values,handleChange];
}

export default useForm;
