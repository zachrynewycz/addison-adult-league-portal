import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isCreateEventModalOpen: boolean;
    isCreateTeamModalOpen: boolean;
    isSidebarOpen: boolean;
}

const initialState: ModalState = {
    isCreateEventModalOpen: false,
    isCreateTeamModalOpen: false,
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
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const { toggleCreateEventModal, toggleCreateTeamModal, toggleSidebar } = modalSlice.actions;

export default modalSlice;
