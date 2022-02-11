import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function AddForm(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const saveData = () => {
    let userInfo = {
        email: email,
        password: password,
      }
    props?.addUser(userInfo)
    setEmail('')
    setPassword('')
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" onClick={saveData}>
          Login
        </Button>{' '}
        <Button variant="primary" >
          Logout
        </Button>{''}
      </Form>
    </Container>
  )
}