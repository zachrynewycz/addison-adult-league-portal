import { configureStore } from "@reduxjs/toolkit";
import divisionSlice from "./slices/divisionSlice";
import modalSlice from "./slices/modalSlice";

const store = configureStore({
    reducer: {
        division: divisionSlice.reducer,
        modal: modalSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
