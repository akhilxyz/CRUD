import React from 'react'
import { Button, Table } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

export default function Curd(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Email</th >
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props?.users.length > 0 && (
          props?.users.map((user) => {
            const { id, email, password } = user;
            return (
              <tr>
                <td>{id}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td><Button onClick={()=> props?.editUser(user)}><i className='fas fa-edit'></i>Edit</Button></td>
                <td> <Button className="btn btn-primary mr-2 danger" onClick={() => props.deleteUser(id)} >
                  <i className='fas fa-trash-alt'></i>Delete</Button>
                </td>
              </tr>
            )
          } 
          ))}
      </tbody>
    </Table>
  )
}