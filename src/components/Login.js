import React, { useEffect, useState } from "react";
import "../css/login.css";
import image from "../images/login.png";
import logo from "../images/logo.jpg";
import { loginUser } from "../services/authService";
import InputField from "../components/shared/InputField";
import Logo from "./shared/Logo";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenicate } from '../rtk/features/adminSlice'
import { useDispatch } from "react-redux";
import { adminAuthorization } from '../rtk/features/adminSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Enter your username"),
    password: Yup.string().required("Enter your password"),
});

function Login() {
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const[loader, setLoader] = useState(false);
    const[success, setSuccess] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");

    useEffect( () => {
      const isLogged = Boolean(localStorage.getItem('isLogged'));
        if(isLogged) {
          return navigate("/dashboard");
        }
    },[]);

      const loginUser = async  (values) => {
      const resp = await dispatch(adminAuthorization(values));
      let { message, data } = resp.payload.data;
      
      if(!data) {
        setErrorMessage(message);
        return; 
      }
      if(resp.payload.message === "success") {
          window.location.href = "/dashboard";
      } 
    }
    const h2 = "India's most fast billing software";
    const subHeadingText =
        "Access your inventory management system effortlessly. Log in to track\
          manage, and optimize your stock in one place. Stay organized and in \
          control of your business operations with ease.";
    return (
        <div className="container">
            <div className="left">
                <h2>{h2}</h2>
                <p>{subHeadingText}</p>
                <div className="icons">
                    <img src={image} alt="Lovebirds" />
                </div>
            </div>
            <div className="right">
                <Logo />
                <h2>Welcome to VyaparTrack</h2>
                <span className="error-message">{errorMessage}</span>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={LoginSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const data = await loginUser(values);
                        } catch (error) {
                          
                        }
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField
                                label="Username"
                                type="text"
                                name="username"
                                placeholder="Enter your username or email"
                            />
                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                            />
                            <div className="form-group form-check d-flex justify-content-between">
                                <div>
                                    <input
                                        className="form-check-input"
                                        id="rememberMe"
                                        type="checkbox"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="rememberMe"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <a className="text-primary" href="#">
                                    Reset Password
                                </a>
                            </div>
                            <button
                                className="btn btn-primary1 btn-block"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Signing In..." : "Sign In"}
                            </button>
                            <div className="social-buttons mt-4">
                                <button
                                    className="btn btn-light border"
                                    type="button"
                                >
                                    <i className="fab fa-google"></i>
                                </button>
                                <button
                                    className="btn btn-light border"
                                    type="button"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button
                                    className="btn btn-light border"
                                    type="button"
                                >
                                    <i className="fab fa-apple"></i>
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                <p>
                                    Don't have an account?
                                    <a className="text-primary" href="#">
                                        Create Account
                                    </a>
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
export default Login;
