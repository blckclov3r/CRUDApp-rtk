import { createSlice } from "@reduxjs/toolkit";


export const personSlice = createSlice({
    name: "person",
    initialState: {
        persons: [],
        status: 'idle', //loading, error
        id: '',
    },
    reducers: {
        addPerson: (state, action) => {
            try {
                state.status = 'loading';
                state.persons = [...state.persons, action.payload];
            } catch (err) {
                state.status = 'error';
                console.log('addPerson error', err);
            } finally {
                state.status = 'idle';
            }
        },

        setId: (state, action) => {
            state.id = action.payload;
        },

        updatePerson: (state, action) => {

            const { name, address, contact, email } = action.payload;

            try {
                state.status = 'loading';
                // the reason we used filter method because forEach is an array method
                state.persons.filter((person) => {
                    return person.id === state.id;
                }).forEach((person) => {
                    person.name = name;
                    person.address = address;
                    person.contact = contact;
                    person.email = email;
                });
            } catch (err) {
                state.status = 'error';
                console.log('updatePerson error', err);
            } finally {
                state.status = 'idle';
                state.id = '';
            }


        },
        deletePerson: (state, action) => {
            try{
                state.status = 'loading';
                state.persons = state.persons.filter((person)=> {
                    return person.id !== action.payload
                });
            } catch (err) {
                state.status = 'error';
                console.log('deletePerson error', err);
            } finally {
                state.status = 'idle';
            }
        },
    }
});

export const getStatus = (state) => state.person.status;

export const getPersons = (state) => state.person.persons;

export const getPersonId = (state) => state.person.id;

export const { addPerson, updatePerson, deletePerson, setId } = personSlice.actions
export default personSlice.reducer