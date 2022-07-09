import { Modal,Form,Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getPersonId, getPersons } from '../features/personSlice'

export default function UpdateModal({show,handleClose,updatePersonSubmit, nameRef,addressRef,contactRef,emailRef,status,}) {

  const id = useSelector(getPersonId);
  const persons = useSelector(getPersons);

  const person = persons?.find((person)=>{
    return person.id === id;
  });

  return (
    <>
         <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form onSubmit={updatePersonSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group className="mb-3" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} defaultValue={person?.name}  placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" ref={addressRef} defaultValue={person?.address}  placeholder="Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" ref={contactRef} defaultValue={person?.contact}  placeholder="Contact" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} defaultValue={person?.email}  placeholder="Email" required />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" disabled={status === 'loading' ? true : false}>Update</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
    </>
  )
}
