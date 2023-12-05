import React, { useRef, useState } from "react";
import "./style.css";
import { Form, Input, Button, Message } from "semantic-ui-react";
import PublicNavBar from "../components/PublicNavBar";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [errorTime, setErrorTime] = useState(true);
  const [error, setError] = useState("");
  const loginData = useRef({
    email: "",
    password: "",
  });
  const handleLogin = () => {
    setLoading(true);
    axios
      .post("/camping/api/admin/login", loginData.current)
      .then((res) => {
        // console.log(res)
        if (!res.data.status) {
          setError(res.data.error);
          setLoading(false);
          setTimeout(() => {
            setErrorTime(false);
          }, 10000);
        } else if (res.data.status) {
          setLoading(false);
          localStorage.setItem("id", res.data.data.id);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("isAdmin", res.data.data.isAdmin);
          navigate("/admin");
        }
      })
      .catch((err) => {
        console.dir(err);
        setLoading(false);
        // setError(err.data);
        // console.dir(err);
      });
  };
  return (
    <div className="login-page">
      <PublicNavBar />
      <div className="login-container">
        <h1>Login</h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              // label="Email"
              placeholder="exp:xyz@mail.com"
              onChange={(e) => {
                loginData.current.email = e.target.value;
              }}
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              type={show ? "text" : "password"}
              placeholder="password"
              onChange={(e) => {
                loginData.current.password = e.target.value;
              }}
            />
          </Form.Group>
          <Form.Group>
            <Link className="to-register-link" to="/register">
              You don't have an account yet? Register now.
            </Link>
          </Form.Group>
          {error && errorTime && (
            <Message negative>
              <Message.Header>Sorry!</Message.Header>
              <p>{error}</p>
            </Message>
          )}
          <Form.Checkbox
            onClick={() => {
              setShow(!show);
            }}
            label="Show password"
          />

          <Button
            onClick={() => {
              handleLogin();
            }}
            color="orange"
            loading={loading}
          >
            Login
          </Button>
        </Form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AdminLogin;
