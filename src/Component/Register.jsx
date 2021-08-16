import React, { useState, useEffect, useRef } from "react";
import Axios from 'axios'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormHelperText,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const url = `https://artwork-gallery-app1.herokuapp.com/auth/register`;

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  },[]);
  const paperStyle = { padding: 20, width: 300, margin: "3rem auto" };
  const headerStyle = { margin: 0 };
  const avtarStyle = { backgroundColor: "#4ed290" };
  // const initialValues = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //};
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, " It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),

    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
  });

  const onSubmit = (values, props) => {
    
    console.log(values);
   
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return  (
    <Grid>
      <Paper evaluation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <AddCircleOutlineIcon />{" "}
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
        </Grid>
        <Formik
          
          data={data}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                inputRef={inputRef}
                fullWidth
                name="name"
                value={data.name}
                onChange={(e) => handle(e)}
                label="Name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
                fullWidth
                required
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                value={data.email}
                onChange={(e) => handle(e)}
                placeholder="Enter email"
                helperText={<ErrorMessage name="email" />}
                fullWidth
                required
              />

              <Field
                as={TextField}
                label="password"
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => handle(e)}
                placeholder="Enter password"
                helperText={<ErrorMessage name="password" />}
                fullWidth
                required
              /><br/><br/>

              <Button
                type="submit"
                onClick={(e)=>submit(e)}
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
              >
                {props.isSubmitting ? "Loading" : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};
export default Register;
