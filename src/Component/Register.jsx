import React from "react";
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
  const paperStyle = { padding: 20, width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avtarStyle = { backgroundColor: "#4ed290" };
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, " It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "password not match")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid>
      <Paper evaluation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <AddCircleOutlineIcon />{" "}
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                autoFocus
                fullWidth
                name="name"
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
                placeholder="Enter email"
                helperText={<ErrorMessage name="email" />}
                fullWidth
                required
              />
              <Field
                as={TextField}
                label="Phone number"
                name="phoneNumber"
                placeholder="Enter mobile"
                helperText={<ErrorMessage name="phoneNumber" />}
                fullWidth
                required
              />
              <Field
                as={TextField}
                label="password"
                type="password"
                name="password"
                placeholder="Enter password"
                helperText={<ErrorMessage name="password" />}
                fullWidth
                required
              />
              <Field
                as={TextField}
                label=" Confirm password"
                type="password"
                name="confirmPassword"
                placeholder="Enter confirm password"
                helperText={<ErrorMessage name="confirmPassword" />}
                fullWidth
                required
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept the terms and conditions"
              />
              <FormHelperText>
                {<ErrorMessage name="termsAndConditions" />}
              </FormHelperText>
              <br />
              <Button
                type="submit"
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
