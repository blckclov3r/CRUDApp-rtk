import { useRef } from 'react';
import { useState } from 'react';
import { Button, Container, Stack, Table } from 'react-bootstrap';
import './App.scss';
import Header from './common/Header';
import AddModal from './components/AddModal';

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addPerson, getStatus } from './features/personSlice';

function App() {

  const nameRef = useRef();
  const addressRef= useRef();
  const contactRef = useRef();
  const emailRef = useRef();

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const status = useSelector(getStatus);

  const addFormSubmit = (e) => {
    e.preventDefault();
    if(status === 'idle'){
      dispatch(addPerson(
        {
          id: nanoid(),
          name: nameRef.current.value,
          contact: contactRef.current.value,
          address: addressRef.current.value,
          emailRef: emailRef.current.value
        }
      ));
      setShow(false);
    };
  }





  return (
    <>
      <Header />
      <Container className='mt-4'>
        <Stack direction="horizontal">
          <Button variant="primary" onClick={handleShow}>Primary</Button>
        </Stack>

        <Stack direction="vertical" className='mt-4 bg-white p-4'>
          <Table bordered hover className='mt-3'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>

            </tbody>
          </Table>
        </Stack>
      </Container>


      <AddModal handleClose={handleClose} show={show} addFormSubmit={addFormSubmit} 
          nameRef={nameRef}
          contactRef={contactRef}
          addressRef={addressRef}
          emailRef={emailRef}
          status={status}
      />
    </>
  );
}

export default App;
