// import { yellow } from '@mui/material/colors';
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ModalAdd from "./Modal";

export default function DataTable(props) {
  const [iteam, setIteam] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("props.userList.", props.userList)
  const onDelete = (id) => {
    props.RemoveUser(id);
  };
  const edit = (iteamid) => {
    setIteam(iteamid);
    handleShow();
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no.</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.userList.length > 0 ? (
            props.userList.map((iteam) => {
              return (
                <tr>
                  <td>{iteam.name}</td>
                  <td>{iteam.email}</td>
                  <td>{iteam.phoneno}</td>
                  <td>{iteam.address}</td>
                  <td>
                    <span onClick={() => edit(iteam)}>
                      <i
                        class="fas fa-edit"
                        style={{ marginRight: "20px", color: "blue" }}
                      ></i>{" "}
                    </span>
                    <span onClick={() => onDelete(iteam.id)}>
                      {" "}
                      <i class="fas fa-trash" style={{ color: "red" }}></i>
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <h1>No user found</h1>
          )}
        </tbody>
      </Table>
      <ModalAdd
        iteam={iteam}
        show={show}
        handleClose={handleClose}
        title="Edit User"
        EditUser={props.EditUser}
      />
    </div>
  );
}