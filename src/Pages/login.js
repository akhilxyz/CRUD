import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userList, setUserList] = useState([]);
  const history = useNavigate();

  const [userState, setUserState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUserState({
      ...userState,
      [e.target.name]: value
    });
  };

  const Adduser = (user) => {
    user.id = userList.length + 1;
    let newUser = [...userList, user];
    setUserList(newUser);
    localStorage.setItem("userList", JSON.stringify(newUser));
  };

  const GetData = () => {
    if (localStorage.getItem("userList")) {
      let userListt = JSON.parse(localStorage.getItem("userList"));
      setUserList(userListt);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const login = () => {
    const userDetail = userList.find(user => user.email === userState.email)
    if(userDetail){
      if(userDetail.password === userState.password){
        window.alert('Login Successfully !')
        localStorage.setItem("loggedIn", true)
        history('/')
      }
      else{
        window.alert('Wrong Password')
      }
    }
    else{
      window.alert('User Not Exist')
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={userState.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={userState.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={login}>
        Login
      </Button>
    </Form>
  );
}
