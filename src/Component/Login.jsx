import React from "react";
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
  username: "",
  password: "",
  remember: false,
};
const validationSchema = Yup.object().shape({
  username: Yup.string().email("Please enter valid email").required("Required"),
  password: Yup.string().required("Required"),
});
const onSubmit = (values, props) => {
  console.log(values);
  setTimeout(() => {
    props.resetForm();
    props.setClicking(false);
  }, 2000);

  console.log(props);
};
const Login = ({ handleChange }) => {
  return (
    <Grid>
      <Paper evaluation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <LockOutlinedIcon />{" "}
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <Field
                as={TextField}
                autoFocus
                label="Username"
                name="username"
                placeholder="Enter username"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                label="password"
                name="password"
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
