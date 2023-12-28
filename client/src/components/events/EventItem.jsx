import React, { useState, useEffect } from "react";
import "./style.css";
import { FaCirclePlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { BiEditAlt, BiSolidTrash } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { FaUserCheck, FaMapMarkedAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { FaMountainCity } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";
import { RiImageEditFill } from "react-icons/ri";
import {
  Message,
  Button,
  Icon,
  Modal,
  Form,
  Header,
  Image,
  Table,
  Dropdown,
} from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "close2":
      return { open2: false };
    case "close3":
      return { open3: false };
    case "close4":
      return { open4: false };
    case "open":
      return { open: true, size: action.size };
    case "open2":
      return { open2: true, size: action.size };
    case "open3":
      return { open3: true, size: action.size };
    case "open4":
      return { open4: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}
function EventItem({
  title,
  limiteParticipant,
  users,
  region,
  city,
  place,
  period,
  price,
  desc,
  date,
  imgUrl,
  isPostponed,
  _id,
}) {
  // console.log(users)
  let eventDate = new Date(date).getTime();
  let currentDate = new Date().getTime();
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    open2: false,
    open3: false,
    open4: false,
    size: undefined,
  });
  const { open, size, open2, open3, open4 } = state;
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("id");
  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [photoData, setPhotoData] = useState();
  const [newDate, setNewDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (eventDate <= currentDate) {
      axios
        .delete(`/camping/api/admin/deleteCamp?campId=${_id}`)
        .then((res) => {
          // setLoading(false);
        })
        .catch((err) => {
          // if (!err.data.status) {
          //   setError(err.data.error);
          // }
          console.dir(err);
          // setLoading(false);
        });
    }
  }, [_id, eventDate, currentDate ]);
  const handleJoinCamp = () => {
    setLoading(true);
    axios
      .put(`/camping/api/join?id=${id}&campId=${_id}`)
      .then((res) => {
        setLoading(false);
        if (res.status === 204) {
          dispatch({ type: "close" });
          setWarning("You have already joined one of our events");
          setTimeout(() => {
            setWarning("");
          }, 5000);
        } else {
          dispatch({ type: "close" });
        }
      })
      .catch((err) => {
        if (!err.data.status) {
          setLoading(false);
          setError(err.data.error);
        }
      });
  };
  const handleEditCamp = () => {
    setLoading(true);
    axios
      .put(`/camping/api/admin/updateCamp?campId=${_id}`, updateData)
      .then((res) => {
        setLoading(false);
        // console.log(res);
        dispatch({ type: "close2" });
      })
      .catch((err) => {
        if (!err.data.status) {
          setLoading(false);
          setError(err.data.error);
        }
      });
  };
  const handleEditPhotoCamp = () => {
    setLoading(true);
    let photoForm = new FormData();
    photoForm.append("photo", photoData[0]);
    axios
      .put(`/camping/api/admin/updateCampPhoto?campId=${_id}`, photoForm)
      .then((res) => {
        setLoading(false);
        dispatch({ type: "close3" });
      })
      .catch((err) => {
        // if (!err.data.status) {
        //   setError(err.data.error);
        // }
        console.dir(err);
        setLoading(false);
      });
  };
  const handleDeleteCamp = () => {
    setLoading(true);
    axios
      .delete(`/camping/api/admin/deleteCamp?campId=${_id}`)
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        // if (!err.data.status) {
        //   setError(err.data.error);
        // }
        console.dir(err);
        setLoading(false);
      });
  };
  const handleCancelCamp = () => {
    setLoading(true);
    axios
      .put(`/camping/api/leave?id=${id}&campId=${_id}`)
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const handlePostponeCamp = () => {
    setLoading1(true);
    let date3 = new Date(newDate.newDate).getTime();
    if (currentDate > date3) {
      setLoading1(false);
      return toast.error("Invalid date, can't set past date", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      axios
        .put(`/camping/api/admin/postPoneCamp?campId=${_id}`, newDate)
        .then((res) => {
          setLoading1(false);
          dispatch({ type: "close2" });
          // console.log(res);
        })
        .catch((err) => {
          console.dir(err);
          setLoading1(false);
        });
    }
  };
  return (
    <div
      className="event-item"
      style={
        isPostponed
          ? { border: "5px #051937 solid", backgroundColor: "#dddce2" }
          : limiteParticipant === users.length || eventDate < currentDate
          ? { border: "5px #04492e solid", backgroundColor: "#72b594" }
          : {}
      }
    >
      <div
        className="event-img"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        {localStorage.getItem("isAdmin") === "true" && (
          <RiImageEditFill
            color="brown"
            onClick={() => {
              dispatch({ type: "open3", size: "mini" });
            }}
            className="edit-img-icon"
            size={25}
          />
        )}
      </div>

      <h1>{title}</h1>
      <div
        className="event-item-head"
        style={
          users.length === limiteParticipant
            ? { border: "2px #fc9c1e solid" }
            : {}
        }
      >
        <ul>
          <li className="i">
            <IoIosPeople size={27} color="#fe9307" /> {limiteParticipant}
          </li>
          <li
            className="i open-users"
            onClick={() => {
              localStorage.getItem("isAdmin") === "true" &&
                dispatch({ type: "open4", size: "small" });
            }}
          >
            <FaUserCheck size={22} color="#fe9307" /> {users.length}/20
          </li>
          <li className="i">
            <FaMapMarkedAlt size={22} color="#fe9307" /> {region}{" "}
          </li>
          <li className="i">
            <FaMountainCity size={22} color="#fe9307" /> {city}
          </li>
        </ul>
        <ul>
          <li className="i">
            <MdPlace size={22} color="#fe9307" /> {place}{" "}
          </li>
          <li className="i">
            <LuCalendarClock size={22} color="#fe9307" /> {period}{" "}
          </li>
          <li>
            <FaMoneyCheckAlt size={22} color="#fe9307" /> {price} DT/person
          </li>
        </ul>
      </div>
      <p>{desc}</p>
      <div className="event-item-footer">
        <h4 style={isPostponed ? { color: "#051937" } : {}}>
          {date}{" "}
          <span
            style={{
              color: "#051937",
              fontStyle: "italic",
              fontSize: "0.85rem",
            }}
          >
            {isPostponed && "Postponed"}
          </span>
          <span
            style={{ color: "red", fontStyle: "italic", marginLeft: "20px" }}
          >
            {" "}
            {currentDate > eventDate && "This event is expired"}
          </span>
        </h4>
        {users.length === limiteParticipant ? (
          <span>
            CLOSED
            <FaCheck />
          </span>
        ) : users.find((elt) => elt._id === id) ? (
          <div className="event-check">
            <span
              onClick={() => {
                handleCancelCamp();
              }}
              style={{
                all: "unset",
                display: "block",
                cursor: "pointer",
                color: "#f41a1a",
              }}
            >
              {loading ? <Icon name="circle notched" loading /> : "Leave"}
            </span>
            <MdCancel
              onClick={() => {
                handleCancelCamp();
              }}
              style={{ cursor: "pointer" }}
              size={25}
              color="#f41a1a"
            />
          </div>
        ) : !(localStorage.getItem("isAdmin") === "true") &&
          eventDate > currentDate &&
          limiteParticipant > users.length ? (
          <div className="event-check">
            <span
              onClick={() => {
                if (!token) {
                  navigate("/login");
                } else {
                  dispatch({ type: "open", size: "mini" });
                }
              }}
              style={{ all: "unset", display: "block", cursor: "pointer" }}
            >
              {loading ? <Icon name="circle notched" loading /> : "Join now"}
            </span>
            <FaCirclePlus
              onClick={() => {
                if (!token) {
                  navigate("/login");
                } else {
                  dispatch({ type: "open", size: "mini" });
                }
              }}
              style={{ cursor: "pointer" }}
              size={25}
            />
          </div>
        ) : (
          localStorage.getItem("isAdmin") === "true" && (
            <div className="event-check">
              <span
                onClick={() => {
                  dispatch({ type: "open2", size: "fullscreen" });
                }}
                style={{ all: "unset", display: "block", cursor: "pointer" }}
              >
                Edit
              </span>
              <BiEditAlt
                onClick={() => {
                  if (!token) {
                    navigate("/login");
                  } else {
                    dispatch({ type: "open2", size: "fullscreen" });
                  }
                }}
                style={{ cursor: "pointer" }}
                size={25}
              />

              <div>
                {loading ? (
                  <Icon name="circle notched" loading />
                ) : (
                  <BiSolidTrash
                    style={{ cursor: "pointer" }}
                    size={25}
                    onClick={() => {
                      handleDeleteCamp();
                    }}
                  />
                )}
              </div>
            </div>
          )
        )}
      </div>
      <div className="event-item-warn">
        {warning && (
          <Message color="yellow" icon size="small">
            <Icon name="info" />
            <Message.Content>{warning}</Message.Content>
          </Message>
        )}
      </div>
      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Header>Join this event</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to join this event</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "close" })}>
            No
          </Button>
          <Button loading={loading} positive onClick={() => handleJoinCamp()}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        size={size}
        open={open2}
        onClose={() => dispatch({ type: "close2" })}
      >
        <Modal.Header>Update this event</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                type="text"
                placeholder="Title"
                onChange={(e) => {
                  setUpdateData({ ...updateData, title: e.target.value });
                }}
              />
              <Form.Input
                type="number"
                placeholder="Limite Participants"
                min={5}
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    limiteParticipant: e.target.value,
                  });
                }}
              />
              <Form.Input
                type="text"
                placeholder="Region"
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    region: e.target.value,
                  });
                }}
              />
              <Form.Input
                type="text"
                placeholder="City"
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    city: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                type="text"
                placeholder="Place"
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    place: e.target.value,
                  });
                }}
              />
              {/* <Form.Input
                type="date"
                placeholder="Date"
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    date: e.target.value,
                  });
                }}
              /> */}
              <Form.Input
                type="text"
                placeholder="Period"
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    period: e.target.value,
                  });
                }}
              />
              <Form.Input
                type="text"
                placeholder="Price"
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    price: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.TextArea
                type="text"
                placeholder="Description"
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    desc: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Button loading={loading} positive onClick={() => handleEditCamp()}>
              Save
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Content>
          <Form>
            <h1>Postpone this camp event</h1>
            <Form.Group>
              <Form.Input
                type="date"
                onChange={(e) => {
                  setNewDate({ newDate: e.target.value });
                }}
              />
            </Form.Group>
            <Button loading={loading1} onClick={() => handlePostponeCamp()}>
              Postpone this event
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "close2" })}>
            Cancel
          </Button>
        </Modal.Actions>
        <ToastContainer
          position="bottom-left"
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
      </Modal>
      <Modal
        size={size}
        open={open3}
        onClose={() => dispatch({ type: "close3" })}
      >
        <Modal.Header>Update this event photo</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                type="file"
                placeholder="photo"
                onChange={(e) => {
                  setPhotoData(e.target.files);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "close3" })}>
            Cancel
          </Button>
          <Button
            loading={loading}
            positive
            onClick={() => handleEditPhotoCamp()}
          >
            Save
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        size={size}
        open={open4}
        onClose={() => dispatch({ type: "close4" })}
      >
        <Modal.Header>Participants</Modal.Header>
        <Modal.Content>
          {users.length > 0 ? (
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Adventurer</Table.HeaderCell>
                  <Table.HeaderCell>Phone number</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {users?.map((user) => (
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Image src={user.imgUrl} rounded size="mini" />
                        <Header.Content>
                          {user.userName}
                          {/* <Header.Subheader>Human Resources</Header.Subheader> */}
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{user.phone}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ) : (
            <h1>
              <Icon name="inbox" /> No participants yet
            </h1>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "close4" })}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default EventItem;
