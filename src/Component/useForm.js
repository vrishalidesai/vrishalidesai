import React,{useState,useRef,useEffect} from 'react'

const useForm = () => {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
      })
    const [errors,setErrors]=useState({});
  
    
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
      
    
  return  [values,errors,setValues,setErrors,inputRef,handleChange];
   
}

export default useForm
