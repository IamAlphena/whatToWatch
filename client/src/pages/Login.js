import React, { useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { USER_LOGIN } from "../utils/action";
import axios from "axios";
import { Form, Button, Icon } from "react-bulma-components";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useStoreContext();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/login", {
        username,
        password,
      });
      dispatch({
        type: USER_LOGIN,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Form.Field>
        <Form.Label>User Name</Form.Label>
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
