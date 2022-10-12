import { configureStore } from "@reduxjs/toolkit";
import { artsApi } from "../services/artsApi";

export default configureStore({
    reducer: {
        [artsApi.reducerPath]: artsApi.reducer
    }
})