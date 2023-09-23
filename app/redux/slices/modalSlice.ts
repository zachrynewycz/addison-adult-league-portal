import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isCreateEventModalOpen: boolean;
    isCreateTeamModalOpen: boolean;
    isUpdateEventModalOpen: boolean;
    isUpdateStandingModalOpen: boolean;
    isSidebarOpen: boolean;
}

const initialState: ModalState = {
    isCreateEventModalOpen: false,
    isCreateTeamModalOpen: false,
    isUpdateEventModalOpen: false,
    isUpdateStandingModalOpen: false,
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
        toggleUpdateEventModal: (state) => {
            state.isUpdateEventModalOpen = !state.isUpdateEventModalOpen;
        },
        toggleUpdateStandingModal: (state) => {
            state.isUpdateStandingModalOpen = !state.isUpdateStandingModalOpen;
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const {
    toggleCreateEventModal,
    toggleUpdateEventModal,
    toggleCreateTeamModal,
    toggleSidebar,
    toggleUpdateStandingModal,
} = modalSlice.actions;

export default modalSlice;
