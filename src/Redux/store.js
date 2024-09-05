import { configureStore } from "@reduxjs/toolkit";
import { drugsReducer } from "../Pharmacy/drugList.slice";

export const store = configureStore({
    reducer: {
        drugs: drugsReducer
    }
});
