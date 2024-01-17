import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomModal = ({ show, handleClose, produs, mesaj }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{`Alerta expirare ${produs}!`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{mesaj}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Am inteles
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
