import React, { useEffect, useState } from "react";
import PublicNavBar from "../components/PublicNavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Item } from "semantic-ui-react";
import Swal from "sweetalert2";
import { Tab, Form, Button, Message } from "semantic-ui-react";
function Settings() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();
  let id = localStorage.getItem("id");
  const handleUpdateInfo = () => {
    setLoading(true);
    axios
      .put(`/camping/api/updateInfos/${id}`, data)
      .then((res) => {
        // console.log(res);
        if (res.data.status) {
          setLoading(false);
          Swal.fire({
            title: "Your data was updated successfully",
            text: "You will be redirect to the login page",
            icon: "sucess",
            // showCancelButton: true,
            confirmButtonColor: "#3085d6",
            // cancelButtonColor: "#d33",
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
              localStorage.clear();
            }
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.error);
        console.dir(err);
      });
  };
  const handleUpdatePassword = () => {
    setLoading(true);
    axios
      .put(`/camping/api/updatePassword/${id}`, data)
      .then((res) => {
        // console.log(res);
        if (res.data.status) {
          setLoading(false);
          Swal.fire({
            title: "Your data was updated successfully",
            text: "You will be redirect to the login page",
            icon: "sucess",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
              localStorage.clear();
            }
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.error);
      });
  };
  const panes = [
    {
      menuItem: "Update Email",
      render: () => (
        <Tab.Pane>
          <Form>
            <Form.Group widths={2}>
              <Form.Input
                type="email"
                name="email"
                placeholder="New Email"
                onChange={(e) => {
                  setData({ [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
            {error && (
              <Message negative>
                <Message.Header>Sorry</Message.Header>
                <p>{error}</p>
              </Message>
            )}
            <Button
              onClick={() => {
                handleUpdateInfo();
              }}
              loading={loading}
            >
              Update
            </Button>
          </Form>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Update Password",
      render: () => (
        <Tab.Pane>
          <Form>
            <Form.Group widths={2}>
              <Form.Input
                name="password"
                type="text"
                placeholder="New Password"
                onChange={(e) => {
                  setData({ [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
            {error && (
              <Message negative>
                <Message.Header>Sorry</Message.Header>
                <p>{error}</p>
              </Message>
            )}
            <Button
              onClick={() => {
                handleUpdatePassword();
              }}
              loading={loading}
            >
              Update
            </Button>
          </Form>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Update Phone Number",
      render: () => (
        <Tab.Pane>
          <Form>
            <Form.Group widths={2}>
              <Form.Input
                type="text"
                name="phone"
                placeholder="New Phone Number"
                onChange={(e) => {
                  setData({ [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>
            <Button
              onClick={() => {
                handleUpdateInfo();
              }}
              loading={loading}
            >
              Update
            </Button>
          </Form>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div>
      <PublicNavBar />
      <div className="profile-container">
        <h1>Profile</h1>
        <div>
          <Tab panes={panes} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
