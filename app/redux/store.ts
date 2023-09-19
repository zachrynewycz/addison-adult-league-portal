import { configureStore } from "@reduxjs/toolkit";
import divisionSlice from "./slices/divisionSlice";

const store = configureStore({
    reducer: {
        division: divisionSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
