import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useStoreContext } from "../utils/GlobalState";
import { USER_LOGIN } from "../utils/action";
import axios from "axios";
import { Form, Button, Icon } from "react-bulma-components";


async function loginUser(credentials) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username, 
      password
    });
    setToken(token)
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e=>setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="text" onChange={e=>setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}