import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      //size="lg"
      centered
      style={{
        padding: 0,
        width: 416,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Modal.Body style={{ padding: 30 }}>
        <h1>{props.title}</h1>
        {props.children}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;