import React, { useState, useEffect } from "react";
import PublicNavBar from "../components/PublicNavBar";
import axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";
function UsersList() {
  const [users, setUsers] = useState();
  const [loading, setloading] = useState(false);
  const [id, setid] = useState(false);
  useEffect(() => {
    axios
      .get("/camping/api/admin/users")
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [users]);
  const handleRemoveUser = (id) => {
    setloading(true);
    axios
      .delete(`/camping/api/admin/removeUser?userId=${id}`)
      .then((res) => {
        console.log(res);
        setloading(false);
      })
      .catch((err) => {
        console.dir(err);
        setloading(false);
      });
  };
  return (
    <div>
      <PublicNavBar />
      <div className="admin-dashboard-container">
        <h1>UsersList</h1>
        <Card.Group>
          {users?.map((user, i) => (
            <Card key={i}>
              <Card.Content>
                <Image floated="right" size="mini" src={user.imgUrl} />
                <Card.Header>{user.userName}</Card.Header>
                <Card.Meta>Phone: {user.phone}</Card.Meta>
                <Card.Description>Email: {user.email}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button
                    basic
                    color="red"
                    onClick={() => {
                      handleRemoveUser(user._id);
                      setid(user._id);
                    }}
                    loading={user._id === id && loading}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </div>
  );
}

export default UsersList;
