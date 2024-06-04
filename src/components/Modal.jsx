// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useDeleteEvent } from '../hooks/useDeleteEvent';

// function StaticExample({id, closeModal}) {
//     const { deleteEvent } = useDeleteEvent();

//   return (
//     <div
//       className="modal show"
//       style={{ display: 'block', position: 'initial' }}
//     >
//       <Modal.Dialog>
//         <Modal.Header closeButton onClick={closeModal}>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="outline-dark" onClick={closeModal}>Cancel</Button>
//           <Button variant="danger" onClick={() => deleteEvent(id)}>Delete</Button>
//           {/* <Button variant="primary">Save changes</Button> */}
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
//   );
// }

// export default StaticExample;




import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDeleteEvent } from '../hooks/useDeleteEvent';

function Example({docId, deleteFunct, stateDelete}) {
  //const [show, setShow] = useState(false);
  const { deleteEvent } = useDeleteEvent();
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Register the callback with the parent component
    setShow(stateDelete);
  },[stateDelete]);
    console.log("Modal state", stateDelete);
    console.log("Other modal state", show);
  const handleClose = () => {
    setShow(false);
    deleteFunct();
  }
  const handleShow = () => setShow(true);

  const submitModal = () => {
    deleteEvent(docId);
    handleClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this event?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={submitModal}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;