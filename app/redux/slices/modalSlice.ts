import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isCreateEventModalOpen: boolean;
    isCreateTeamModalOpen: boolean;
    isUpdateScoreModalOpen: boolean;
    isSidebarOpen: boolean;
}

const initialState: ModalState = {
    isCreateEventModalOpen: false,
    isCreateTeamModalOpen: false,
    isUpdateScoreModalOpen: false,
    isSidebarOpen: false,
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
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const { toggleCreateEventModal, toggleUpdateScoreModal, toggleCreateTeamModal, toggleSidebar } =
    modalSlice.actions;
export default modalSlice;
