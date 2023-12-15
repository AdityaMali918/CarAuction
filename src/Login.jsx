
import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "./LoginValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
import "./sign.css";

function Login({ setUserData }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [values, setValue] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));

    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data.message === "Success") {
            setUserData(res.data.user); // Update user data in App.js
            navigate("/home");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
    <ResponsiveAppBar/>
    
    <div className="outerbox">
      <div className="innerbox">
        <form action="" onSubmit={handleSubmit}>
          <div className="innerbox">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInput}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div className="innerbox">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleInput}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success">
            Log in
          </button>
          <p></p>
          <Link to="/signup" className="btn btn-default border">
            Create Account
          </Link>
        </form>
      </div>
    </div>
    </>
  );
}


export default Login;
