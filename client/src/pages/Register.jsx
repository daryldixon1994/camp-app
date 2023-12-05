import React, { useRef, useState } from "react";
import PublicNavBar from "../components/PublicNavBar";
import { Form, Input, Button, Message } from "semantic-ui-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [errorTime, setErrorTime] = useState(true);
  const [loading, setLoading] = useState(false);
  const registerData = useRef({
    userName: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleRegister = () => {
    setLoading(true);
    axios
      .post("/camping/api/register", registerData.current)
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          toast.success("Your account was created successfully 🤩", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/login");
        }
      })
      .catch((err) => {
        if (!err.response.data.status) {
          setLoading(false);
          setError(err.response.data.error);
          setTimeout(() => {
            setErrorTime(false);
          }, 10000);
        }
      });
  };
  return (
    <div>
      <PublicNavBar />
      <div className="register-container">
        <h1>Create your account.</h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              // label="Username"
              placeholder="Username"
              onChange={(e) => {
                registerData.current.userName = e.target.value;
              }}
            />
            <Form.Field
              control={Input}
              type="email"
              // label="Email"
              placeholder="Email"
              onChange={(e) => {
                registerData.current.email = e.target.value;
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              type="password"
              // label="First name"
              placeholder="Password"
              onChange={(e) => {
                registerData.current.password = e.target.value;
              }}
            />
            <Form.Field
              control={Input}
              // label="Last name"
              placeholder="Phone"
              onChange={(e) => {
                registerData.current.phone = e.target.value;
              }}
            />
          </Form.Group>
          <Form.Group>
            <Link className="to-register-link" to="/login">
              You already have an account? Login now.
            </Link>
          </Form.Group>
          {error && errorTime && (
            <Message negative>
              <Message.Header>Sorry!</Message.Header>
              <p>{error}</p>
            </Message>
          )}
          <Form.Field
            control={Button}
            content="Register"
            color="orange"
            onClick={() => {
              handleRegister();
            }}
            loading={loading}
          />
        </Form>
      </div>
    </div>
  );
}

export default Register;
