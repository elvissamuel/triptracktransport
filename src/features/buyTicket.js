import { createSlice } from "@reduxjs/toolkit";

const buyTicketInput = {departure:'', destination:'', departureDate:'', adult:'', children:''}

export const userSlice = createSlice({
    name:'buyTicket',
    initialState:{value: {buyTicketInput}},
    reducers: {
        inputs: (state, action) =>{
            state.value = action.payload
        },
        updateDate: (state, action) =>{
            state.value.departureDate = action.payload
        },
    }
})

export const {inputs, updateDate} = userSlice.actions
export default userSlice.reducer;
