import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Icon } from "react-bulma-components";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await axios.post("/api/user/login", {
      username,
      password,
    });
    // store in your global state, that a user has logged in.
  }

  return (
    <>
      <Form.Field>
        <Form.Label>Name</Form.Label>
        <Form.Control>
          <Form.Input
            placeholder="Username"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Icon align="left">
            <i className="github" />
          </Icon>
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
          <Icon align="left">
            <i className="github" />
          </Icon>
        </Form.Control>
      </Form.Field>
      <Button.Group>
        <Button fullwidth rounded color="primary" onClick={handleSubmit}>
          Login
        </Button>
      </Button.Group>
    </>
  );
}

export default LogIn;
