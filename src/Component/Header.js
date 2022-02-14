import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import ModalAdd from './Modal';


export default function Header(props) {
  const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //for adding new student

  const addButton = () => {
              handleShow()
  }
 const Delete=()=>{
   props.Delete()
 }


  return (
    <div>
      <ModalAdd show={show} handleClose={handleClose} Adduser={props.Adduser} title='Add User'/>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Manage Employees</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={Delete} variant="danger m-2">-Delete</Button> {' '}
            <Button onClick={addButton} variant="success">+Add</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}