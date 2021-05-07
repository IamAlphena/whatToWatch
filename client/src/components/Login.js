import React from 'react'
import { Form, Button, Icon, Field, Label } from "react-bulma-components"

function LogIn(props) {
    return (
        <>
            <Form.Field>
                <Form.Label>Name</Form.Label>
                <Form.Control>
                    <Form.Input placeholder="Username" name="name" value={props.userName}  />
                    <Icon align="left">
                        <i className="github" />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>Password</Form.Label>
                <Form.Control>
                    <Form.Input placeholder="Password" name="password" type="password" value={props.password} />
                    <Icon align="left">
                        <i className="github" />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Button.Group>
                <Button fullwidth rounded color="primary" onClick={() => console.log(props)}>Login</Button>
            </Button.Group>
        </>
    )
}

// module.exports = LogIn;
export default LogIn;