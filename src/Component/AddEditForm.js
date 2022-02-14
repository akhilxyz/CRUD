import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddEditForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhnoneno] = useState("");
  const [address, setAddress] = useState("");
  const [validated, setValidated] = useState(false);
  const[id,setID]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      formAdd();
    }

    setValidated(true);
  };
  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
       formEdit() 
    }

    setValidated(true);
  };

  const phonenoHandler = (e) => {
    const re = /^\d*\.?\d*$/;
    if (e.target.value.match(re)) {
      setPhnoneno(e.target.value);
    }
  };
  useEffect(() => {
    if(props.iteam){
     const newIteam=props.iteam
     setName(newIteam.name)
     setEmail(newIteam.email)
     setPhnoneno(newIteam.phoneno)
     setAddress(newIteam.address)
     setID(newIteam.id)
    }
  }, []);
  
  


  const formAdd = () => {
    const user = {
      name: name,
      email: email,
      phoneno: phoneno,
      address: address,
    };
    props.Adduser(user);
    props.handleClose();
  };

  
  const formEdit = () => {
    const user = {
      id:id,
      name: name,
      email: email,
      phoneno: phoneno,
      address: address,
    };
    props.EditUser(user);
    props.handleClose();
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={props.iteam?handleEdit:handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Phoneno.</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Phn no."
            value={phoneno}
            onChange={(e) => phonenoHandler(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Address "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}