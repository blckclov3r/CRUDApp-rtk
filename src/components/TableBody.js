
import "./TableBody.scss";
import { Button } from 'react-bootstrap';
import React from 'react';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from "react-redux";
import { deletePerson, getStatus } from "../features/personSlice";

const TableBody = ({person,handleShowUpdate}) => {

    const dispatch = useDispatch();
    const status = useSelector(getStatus);

    return (
        <tr>
          <td data-bs-toggle="tooltip" title={person.id}>{person.id.substring(0,5)}</td>
          <td>{person.name}</td>
          <td>{person.address}</td>
          <td>{person.contact}</td>
          <td>{person.email}</td>
          <td className='d-flex gap-2'>
            <Button variant="info"  onClick={()=>{handleShowUpdate(person.id)}}>Update</Button>
            <Button variant="danger" onClick={()=>{
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      if(status === 'idle'){
                        dispatch(deletePerson(person.id));
                          Swal.fire(
                            'Deleted!',
                            `${person.name} has been deleted.`,
                            'success'
                          )
                      }else{
                        Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Something went wrong!',
                          footer: '<a href="https://facebook.com/blckclov3r">Ask for help</a>'
                        })
                      }
                    }
                  })
            }}>Delete</Button>
          </td>
        </tr>
    );
}

export default TableBody;
