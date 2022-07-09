import { useRef } from 'react';
import { useState } from 'react';
import { Button, Container, Stack, Table } from 'react-bootstrap';
import './App.scss';
import Header from './common/Header';
import AddModal from './components/AddModal';

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addPerson, getPersons, getStatus, setId, updatePerson } from './features/personSlice';
import TableBody from './components/TableBody';
import UpdateModal from './components/UpdateModal';

function App() {
  const dispatch = useDispatch();
  // add state
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  // update state
  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => {
    dispatch(setId(''))
    setShowUpdate(false);
  }
  const handleShowUpdate = (id) => {
    dispatch(setId(id))
    setShowUpdate(true)
  };


  const nameRef = useRef();
  const addressRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();





  //get data from personSlice
  const status = useSelector(getStatus);
  const persons = useSelector(getPersons);

  const addPersonSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const contact = contactRef.current.value;
    const address = addressRef.current.value;
    const email = emailRef.current.value;


    if (status === 'idle') {
      dispatch(addPerson(
        {
          id: nanoid(),
          name,
          contact,
          address,
          email
        }
      ));
      setShowAdd(false);
    };
  }


  const updatePersonSubmit = (e) => {
    e.preventDefault();
    if (status === 'idle') {
      dispatch(updatePerson({
        id: nanoid(),
        name: nameRef.current.value,
        contact: contactRef.current.value,
        address: addressRef.current.value,
        email: emailRef.current.value
      }));
      setShowUpdate(false);
    }
  }



  return (
    <>
      <div className='App'>
      <Header />
      <Container className='mt-4'>
     

        <Stack direction="vertical" className='mt-3 bg-white p-4'>
          <div>
          <Button variant="success"  onClick={handleShowAdd}>
              +Person
          </Button>
          </div>
          <div class="table-responsive">
            <Table bordered hover className='mt-3'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  persons?.map((person) => (
                    <TableBody person={person} key={person.id} handleShowUpdate={handleShowUpdate} />
                  ))
                }

              </tbody>
            </Table>
          </div>
        </Stack>
      </Container>

      <footer className='py-2'>
           <a href="https://facebook.com/blckclov3r">Blckclov3r</a>
      </footer>

      </div>


      <AddModal handleClose={handleCloseAdd} show={showAdd} addPersonSubmit={addPersonSubmit}
        nameRef={nameRef}
        contactRef={contactRef}
        addressRef={addressRef}
        emailRef={emailRef}
        status={status}
      />

      <UpdateModal
        handleClose={handleCloseUpdate} show={showUpdate} updatePersonSubmit={updatePersonSubmit}
        // status={status}
        nameRef={nameRef}
        contactRef={contactRef}
        addressRef={addressRef}
        emailRef={emailRef}

      />
    </>
  );
}

export default App;
