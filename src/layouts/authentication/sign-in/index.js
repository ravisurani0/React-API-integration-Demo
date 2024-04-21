/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

import {  Navigate } from "react-router-dom";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { getUserLogin } from '../../../redux/actions/loginActions'
import { connect } from "react-redux";

import { Formik, ErrorMessage, Field, Form, } from 'formik';
import * as Yup from 'yup';
import FormControl from "@mui/material/FormControl";
import { ConstructionOutlined } from "@mui/icons-material";


function Basic({ userDetails, getUserLoginAction }) {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();
  useEffect(() => {
    if (userDetails) {
      navigate('/dashboard')
    }
  }, [userDetails])

  const onFormSubmit = (formdata) => {
    getUserLoginAction(formdata)
  }

  return (
    userDetails ? <Navigate to="/dashboard" />
      :
      <BasicLayout image={bgImage}>
        < Card >
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Sign in
            </MDTypography>
            {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid> */}
          </MDBox>
          <Formik
            enableReinitialize={true}
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: '',
              password: ''
            })}
            onSubmit={onFormSubmit}
          >
            {formikProps => (
              <Form>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox >
                    <MDBox mb={2}>
                      <Field
                        as={MDInput}
                        type="email"
                        name="email"
                        label="Email"
                        fullWidth
                      />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </MDBox>
                    <MDBox mb={2}>
                      <Field
                        as={MDInput}
                        type="password"
                        name="password"
                        label="Password"
                        fullWidth
                      />
                      <ErrorMessage name="password" component="div" className="error-message" />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" ml={-1}>
                      <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                      <MDTypography
                        variant="button"
                        fontWeight="regular"
                        color="text"
                        onClick={handleSetRememberMe}
                        sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                      >
                        &nbsp;&nbsp;Remember me
                      </MDTypography>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDButton type="submit" variant="gradient" color="info" fullWidth>
                        sign in
                      </MDButton>
                    </MDBox>
                    {/* <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox> */}
                  </MDBox>
                </MDBox>
              </Form>
            )}
          </Formik>
        </Card >
      </BasicLayout >

  );
}
const mapStateToProps = (state) => {
  return {
    userDetails: state.logedinUserReducer.userDetails,
  };
};


export default connect(mapStateToProps, { getUserLoginAction: getUserLogin })(Basic);
