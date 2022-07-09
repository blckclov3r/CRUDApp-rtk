import { createSlice } from "@reduxjs/toolkit";


export const personSlice = createSlice({
    name: "person",
    initialState: {
        persons: [],
        status: 'idle', //loading, error
    },
    reducers: {
        addPerson: (state,action) =>{
            state.status = 'loading';
            try{
                state.persons = [...state.persons,action.payload];
            }catch(err){
                state.status = 'error';
                console.log('addPerson error',err);
            }finally{
                state.status = 'idle';
            }
        },
        updatePerson: (state, action) =>{

        },
        deletePerson: (state,action)=>{

        },
    }
});

export const getStatus = (state) => state.person.status;

export const {addPerson,updatePerson,deletePerson} = personSlice.actions
export default personSlice.reducer