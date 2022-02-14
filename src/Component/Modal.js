import React  from 'react';
import {  Modal } from 'react-bootstrap';
import AddEditForm from './AddEditForm';

export default function ModalAdd(props) {
  
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>   
               < AddEditForm  iteam={props.iteam} Adduser={props.Adduser} handleClose={props.handleClose} EditUser={props.EditUser}
               />
                </Modal.Body>
                
            </Modal>
        </>
    );
}


