import React from "react";
import Modal from "./modal";
const ErrorModal = (props) => {
  return (
    <Modal show={props.show} modalClosed={props.modalClosed}>
      {props.show}
    </Modal>
  );
};
export default ErrorModal;
