import { Button, Modal, Form } from "react-bootstrap";


export default function AddModal({ show, handleClose, addPersonSubmit, nameRef,contactRef,addressRef,emailRef, status }) {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={addPersonSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" ref={nameRef}  placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" ref={addressRef} placeholder="Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" ref={contactRef} placeholder="Contact" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Email" required />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" disabled={status === 'loading' ? true : false}>Add</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
