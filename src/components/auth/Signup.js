import React, { useState } from "react";
import "./AuthPage.css";
import {
  InputContainer,
  Input,
  CustomSelect,
  InputWithIcon,
  Button,
  TextArea,
} from "../styled-components/Inputs";
import * as Yup from "yup";
import axios from "axios";
import { Toast } from "../styled-components/Toast";
import { useFormik } from "formik";
import { auth } from "../../firebase/firebase.js";
import { Link } from "react-router-dom";
import { useAuthContext } from "./auth-context/AuthContext";

const RegisterCompany = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const url =
    "https://api.coinslash.org/v1/coinslash_community/register_company";
  const context = useAuthContext();
  const { signup } = context;

  const revealPassword = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = async (token, values) => {
    try {
      const res = await axios.post(url, values, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      console.log(res);
      if (res.status === 201) {
        setLoading(false);
        Toast.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
      }
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "danger",
        title: `An error occurred please try again!`,
      });
      setLoading(false);
    }
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    company_name: "",
    work_email: "",
    password: "",
    phone_no: "",
    slack_workspace_url: "",
    team_size: "",
  };

  const countries = [
    {
      label: "Nigeria",
      value: "Nigeria",
    },
  ];

  const currency = [
    {
      label: "NGN",
      value: "NGN",
    },
  ];

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    company_name: Yup.string().required("Enter company's name"),
    phone_no: Yup.string().required("Enter Phone Number"),
    slack_workspace_url: Yup.string().required("Enter Workspace URL"),
    team_size: Yup.string().required("Enter Team Size"),
    password: Yup.string()
      .min(5, "Minimum 5 characters")
      .max(50, "Maximum 50 characters")
      .required("Enter password"),
    company_email: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      let token;
      const { work_email, password } = values;
      try {
        await signup(work_email, password);
        const getIdToken = auth.onAuthStateChanged((user) => {
          if (user !== null) {
            user.getIdToken().then((idToken) => {
              token = idToken;
              console.log("Token", token);
              registerUser(token, values);
            });
          }
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
        Toast.fire({
          icon: "error",
          title: "Sign up failed!",
        });
      }
    },
  });

  return (
    <div className="form-wrapper">
      <div className="form-div">
        <h3 className="form-heading"> Create your account</h3>
        <form
          className="form"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="firstname"
                  {...formik.getFieldProps("firstname")}
                />
                <label htmlFor="">First Name</label>
              </InputContainer>
            </div>
            {formik.touched.firstname && formik.errors.firstname ? (
              <span className="error-text">{formik.errors.firstname}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="lastname"
                  {...formik.getFieldProps("lastname")}
                />
                <label htmlFor="">Last Name</label>
              </InputContainer>
            </div>
            {formik.touched.lastname && formik.errors.lastname ? (
              <span className="error-text">{formik.errors.lastname}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="company_name"
                  {...formik.getFieldProps("company_name")}
                />
                <label htmlFor="">Company's Name</label>
              </InputContainer>
            </div>
            {formik.touched.company_name && formik.errors.company_name ? (
              <span className="error-text">{formik.errors.company_name}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  required
                  name="company_email"
                  autoComplete="false"
                  {...formik.getFieldProps("company_email")}
                />
                <label htmlFor="">Company's Email</label>
              </InputContainer>
            </div>
            {formik.touched.work_email && formik.errors.work_email ? (
              <span className="error-text">{formik.errors.work_email}</span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="string"
                  required
                  name="phone_no"
                  {...formik.getFieldProps("phone_no")}
                />
                <label htmlFor="">Phone Number</label>
              </InputContainer>
            </div>
            {formik.touched.phone_no &&
            formik.errors.phone_no ? (
              <span className="error-text">
                {formik.errors.phone_no}
              </span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Your slack workspace URL should look like test.slack.com"
                  name="slack_workspace_url"
                  {...formik.getFieldProps("slack_workspace_url")}
                  rows="3"
                />
              </InputContainer>
            </div>
            {formik.touched.slack_workspace_url &&
            formik.errors.slack_workspace_url ? (
              <span className="error-text">
                {formik.errors.slack_workspace_url}
              </span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Enter team size"
                  name="team_size"
                  {...formik.getFieldProps("team_size")}
                  rows="3"
                />
              </InputContainer>
            </div>
            {formik.touched.team_size &&
            formik.errors.team_size ? (
              <span className="error-text">
                {formik.errors.team_size}
              </span>
            ) : null}
          </div>
          <div className="form-group row mb-4">
            <div className="col-12">
              <InputWithIcon>
                <InputContainer>
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="false"
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  <label htmlFor="">Choose a password</label>
                </InputContainer>
                <span className="pointer" onClick={revealPassword}>
                  {showPassword ? (
                    <i className="las la-eye-slash"></i>
                  ) : (
                    <i className="las la-eye"></i>
                  )}
                </span>
              </InputWithIcon>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <span className="error-text">{formik.errors.password}</span>
            ) : null}
          </div>
          <Button disabled={formik.isSubmitting} onSubmit={formik.handleSubmit}>
            Subscribe
            {loading && (
              <span className="spinner-border mx-3" role="status"></span>
            )}
          </Button>
          {/* <div className="switch-page">
            <p>Have an Account?</p>
            <Link to="/signin">
              <span>Sign In</span>
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default RegisterCompany;
