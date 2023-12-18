import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RoomService from "../pages/admin/room/room.service";


export const setBookingAPI = createAsyncThunk(
    "Room/setBookingAPI",
    async(data, thunkAPI) => {
        try {
            let response = await bookingService.sendToBooking(data);
            return response;
        } catch(exception) {
            throw exception
        }
    }
);

const RoomReducer = createSlice({
    name: "Room",
    initialState: {
        booking: []
    },
    reducers: {
        setItemInTheBooking: (state, action) => {
            let booking = JSON.parse(localStorage.getItem('booking')) ?? [];
            state.booking = booking;
        },
        resetBooking: (state, action) => {
            localStorage.removeItem("booking")
            state.booking = null;
            return;
        },
        setBooking: (state, action) => {
            // action => {type:"Room/setBooking", payload: {} | null | undefined}
            let booking = JSON.parse(localStorage.getItem('booking')) ?? [];
            
            if(booking && booking.length){
                // Non empty in LS
                // room => exists 
                // does not exists
                let index = null
               
                booking.map((bookingItem, key) => {
                    if(bookingItem.roomId === action.payload.roomId) {
                        index = key;
                    }
                })

                if(index === null) {
                    // non exists 
                    booking.push(action.payload)
                } else {
                    // existing 
                    // current item=> qty
                    // booking[index].qty = action.payload.qty;

                    if(action.payload.qty <= 0){
                        booking.splice(index, 1);
                    } else {
                        booking[index].qty = action.payload.qty;
                    }
                }
            } else {
                booking.push(action.payload)
            }

            localStorage.setItem('booking', JSON.stringify(booking));
            state.booking = booking
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setBookingAPI.fulfilled, (state, action) => {
            console.log("success", action.payload);
        })
        builder.addCase(setBookingAPI.rejected, (state, action) => {
            console.log('reject', action.payload)
        })
    }
})

export const {setBooking, setItemInTheBooking, resetBooking} = RoomReducer.actions

export default RoomReducer.reducer;