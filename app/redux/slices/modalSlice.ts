import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isCreateEventModalOpen: boolean;
    isCreateTeamModalOpen: boolean;
}

const initialState: ModalState = {
    isCreateEventModalOpen: false,
    isCreateTeamModalOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleCreateEventModal: (state) => {
            state.isCreateEventModalOpen = !state.isCreateEventModalOpen;
        },
        toggleCreateTeamModal: (state) => {
            state.isCreateTeamModalOpen = !state.isCreateTeamModalOpen;
        },
    },
});

export const { toggleCreateEventModal, toggleCreateTeamModal } = modalSlice.actions;
export default modalSlice;
