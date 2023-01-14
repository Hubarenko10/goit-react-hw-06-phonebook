import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
name: 'contacts',
initialState: contactsInitialState,
reducers:{
addContacts(state,action){
state.push(action.payload);
},
deleteContacts(state,action){
return state = state.filter(contact => contact.id !== action.payload);
}
}
 
})

export const {addContacts, deleteContacts} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
