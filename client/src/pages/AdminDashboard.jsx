import React, { useState } from "react";
import PublicNavBar from "../components/PublicNavBar";
import Footer from "../components/Footer";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Message } from "semantic-ui-react";
import "./style.css";
function AdminDashboard() {
  const [campData, setCampData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [campPhoto, setCampPhoto] = useState({});
  const handleAddCamp = () => {
    setLoading(true);
    let campForm = new FormData();
    campForm.append("photo", campPhoto[0]);
    campForm.append("title", campData.title);
    campForm.append("limiteParticipant", campData.limiteParticipant);
    campForm.append("region", campData.region);
    campForm.append("city", campData.city);
    campForm.append("place", campData.place);
    campForm.append("date", campData.date);
    campForm.append("period", campData.period);
    campForm.append("price", campData.price);
    campForm.append("desc", campData.desc);
    axios
      .post("/camping/api/admin/addCamp", campForm)
      .then((res) => {
        if (res.data.status) {
          setLoading(false);
          toast("✅ Your event has been added successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setCampPhoto({});
          setCampData({
            title: "",
            limiteParticipant: "",
            region: "",
            city: "",
            place: "",
            date: "",
            period: "",
            price: "",
            desc: "",
          });
        } else if (res.status === 204) {
          setError("No data provided, please check required fileds");
          setTimeout(() => {
            setError("");
          }, 5000);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <div>
      <PublicNavBar />
      <div className="admin-dashboard-container">
        <h1>Add new camping event</h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              type="file"
              label="Add cover photo"
              onChange={(e) => {
                setCampPhoto(e.target.files);
              }}
              required={true}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              type="text"
              placeholder="Title"
              value={campData.title}
              onChange={(e) => {
                setCampData({ ...campData, title: e.target.value });
              }}
              required={true}
            />
            <Form.Input
              type="number"
              placeholder="Limite Participants"
              min={5}
              value={campData.limiteParticipant}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  limiteParticipant: e.target.value,
                });
              }}
              required={true}
            />
            <Form.Input
              type="text"
              placeholder="Region"
              value={campData.region}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  region: e.target.value,
                });
              }}
              required={true}
            />
            <Form.Input
              type="text"
              placeholder="City"
              value={campData.city}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  city: e.target.value,
                });
              }}
              required={true}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              type="text"
              placeholder="Place"
              value={campData.place}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  place: e.target.value,
                });
              }}
              required={true}
            />
            <Form.Input
              type="date"
              placeholder="Date"
              value={campData.date}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  date: e.target.value,
                });
              }}
              required={true}
            />
            <Form.Input
              type="text"
              placeholder="Period"
              value={campData.period}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  period: e.target.value,
                });
              }}
              required={true}
            />
            <Form.Input
              type="text"
              placeholder="Price"
              value={campData.price}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  price: Number(e.target.value),
                });
              }}
              required={true}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea
              type="text"
              placeholder="Description"
              value={campData.desc}
              onChange={(e) => {
                setCampData({
                  ...campData,
                  desc: e.target.value,
                });
              }}
              required={true}
            />
          </Form.Group>
          {error && (
            <Message icon="warning sign" header="Oooops!" content={error} />
          )}
          <Button
            color="orange"
            onClick={() => {
              handleAddCamp();
            }}
            loading={loading}
          >
            Add
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
        theme="light"
      />
      <Footer />
    </div>
  );
}

export default AdminDashboard;
