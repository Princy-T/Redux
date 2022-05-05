import { configureStore } from "@reduxjs/toolkit";
import myreducer from "../redux/user";

export const store = configureStore({

    reducer:{
        user:myreducer,
    },
});