import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/user.reducer";
import roomReducer from "../reducer/room.reducer";

const store = configureStore({
    reducer: {
        User: userReducer,
        booking: roomReducer
    }
})

export default store