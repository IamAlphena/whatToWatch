import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Icon } from "react-bulma-components";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await axios.post("/api/user/register", {
      username,
      password,
      firstname,
      lastname
    });
    // store in your global state, that a user has logged in.
    const userObj = {userName: username, passWord: password};
    sessionStorage.setItem('User', JSON.stringify(userObj));
    console.log(sessionStorage.getItem('User'));
  }

  return (
    <>
    <Form.Field>
        <Form.Label>First Name</Form.Label>
        <Form.Control>
          <Form.Input
            placeholder="First Name"
            name="name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Last Name</Form.Label>
        <Form.Control>
          <Form.Input
            placeholder="Last Name"
            name="name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            placeholder="Username"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Form.Field>
        <Form.Label>Password</Form.Label>
        <Form.Control>
          <Form.Input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <Button.Group>
        <div className="btn">
        <Button fullwidth rounded color="link" onClick={handleSubmit}>
          Register
        </Button>
        </div>
      </Button.Group>
    </>
  );
}

export default SignUp;
