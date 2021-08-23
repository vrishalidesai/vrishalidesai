import React from "react";
import "./CSS/Register.css";
import Axios from "axios";
import useForm from "./useForm";
import validation from "./validation";
const Register = () => {
  const [values, errors, setValues, setErrors, inputRef, handleChange] =
    useForm();
  const url = `https://artwork-gallery-app1.herokuapp.com/auth/register`;
  const handleFormSubmit = (e) => {
    e.preventDefault();

    setErrors(validation(values));

    Axios.post(url, {
      name: values.name,
      email: values.email,
      password: values.password,
    })
      .then((res) => {
        console.log("Register", res.data);
        setValues(res.data);
        setTimeout(() => {
          setValues({ name: "", email: "", password: "" });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="center register">
      <h1>Register</h1>
      <form values={values} onSubmit={handleFormSubmit}>
        <div className="txt_field">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            ref={inputRef}
          />
          <span></span>
          {errors.name && <div className="errorMsg">{errors.name}</div>}

          <label>Username</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
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
          />
          {errors.password && <div className="errorMsg">{errors.password}</div>}
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Register" />
        <div className="signup_link">
          Already a member? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};
export default Register;
