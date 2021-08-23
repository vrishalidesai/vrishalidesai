import React, {  useContext } from "react";
import "./CSS/Register.css";
import Axios from "axios";
import validation from "./validation";
import { GlobalContext } from "../App";
import useForm from "./useForm";
const Login = () => {
  const [values, errors, setValues, setErrors, inputRef, handleChange] =
    useForm();

  const url = `https://artwork-gallery-app1.herokuapp.com/auth/login`;
  const { setUserId } = useContext(GlobalContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));

    Axios.post(url, {
      email: values.email,
      password: values.password,
    })
      .then((res) => {
        console.log(res.data);
        setUserId(res.data._id);
        setTimeout(() => {
          setValues({  email: "", password: "" });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form values={values} onSubmit={handleFormSubmit}>
        <div className="txt_field">
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            ref={inputRef}
            required
          />
          {errors.email && <div className="errorMsg">{errors.email}</div>}
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="errorMsg">{errors.password}</div>}
          <span></span>
          <label>Password</label>
        </div>
        {/* <div className="pass">Forgot Password?</div> */}
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a a member? <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
};
export default Login;
