import React ,{useState,useEffect,useRef} from "react";
import Axios from 'axios';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const paperStyle = {
  padding: "20px",
  height: "73vh",
  width: 300,
  margin: "30px auto",
};
const avtarStyle = { backgroundColor: "#4ed290" };
const cssStyle = { textDecoration: "none" };
const initialValues = {
  name: "",
  password: "",
  remember: false,
};
const validationSchema = Yup.object().shape({
  username: Yup.string().email("Please enter valid email").required("Required"),
  password: Yup.string().required("Required"),
});
const onSubmit = (values, props) => {
  console.log(values);
  // setTimeout(() => {
  //   props.resetForm();
  //   props.setSubmitting(false);
  // }, 2000);

  console.log(props);
};
const Login = () => {
  const url = `https://artwork-gallery-app1.herokuapp.com/auth/login`;

  const [data, setData] = useState({
    email: "",
    password: "",
    
  });

  function submit(e,props) {
    e.preventDefault();
    
    Axios.post(url, {
     
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


  const inputRef= useRef(null);
  useEffect(()=>{
inputRef.current.focus()
  },[])
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <LockOutlinedIcon />{" "}
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <Formik
         data={data}
         initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <Field
                as={TextField}
                inputRef={inputRef}
                label="Username"
                name="email"
                value={data.email}
                onChange={(e) => handle(e)}
                placeholder="Enter username"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                label="password"
                name="password"
                value={data.password}
                onChange={(e) => handle(e)}
                type="password"
                placeholder="Enter password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <br />
              <Button
                type="submit"
                onClick={(e)=>submit(e)}
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Sign in"}
              </Button>
              <br />
              <br />
            </Form>
          )}
        </Formik>

        <Typography>
          Do you have an account ?<NavLink to="/register">Register</NavLink>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
