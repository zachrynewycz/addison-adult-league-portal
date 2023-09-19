import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isCreateEventModalOpen: boolean;
    isCreateTeamModalOpen: boolean;
    isUpdateScoreModalOpen: boolean;
}

const initialState: ModalState = {
    isCreateEventModalOpen: false,
    isCreateTeamModalOpen: false,
    isUpdateScoreModalOpen: false,
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
        toggleUpdateScoreModal: (state) => {
            state.isUpdateScoreModalOpen = !state.isUpdateScoreModalOpen;
        },
    },
});

export const { toggleCreateEventModal, toggleUpdateScoreModal, toggleCreateTeamModal } = modalSlice.actions;
export default modalSlice;
