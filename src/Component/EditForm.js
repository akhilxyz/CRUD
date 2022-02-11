import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function EditForm(props) {
  const [id, setId] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (props && props.currentUser) {
      setId(props.currentUser.id)
      setEmail(props.currentUser.Email)
      setPassword(props.currentUser.Password)
    }
  }, [props])

  const saveData = () => {
    let userInfo = {
      id: id,
      email: email,
      password: password,
    }
    props?.EditUser(userInfo)
    setId('')
    setEmail('')
    setPassword('')

  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} name="name" onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} name="username" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" onClick={saveData}>
          Update
        </Button>{' '}
        <Button variant="primary" >
          Logout
        </Button>{' '}
      </Form>
    </Container>
  )
}