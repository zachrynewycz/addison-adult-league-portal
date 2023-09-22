import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { toggleCreateEventModal } from "@/app/redux/slices/modalSlice";
import { clearScheduleByDivision } from "@/app/firebase/functions/clearScheduleByDivision";
import CreateEventForm from "./Forms/CreateEventForm";
import AuthCheck from "../Shared/AuthCheck";

const ScheduleToolbar = () => {
    const dispatch = useAppDispatch();
    const { divisionNumber } = useAppSelector((state) => state.division);

    const handleClearAll = () => {
        const wantsToDelete = confirm(
            "You are about to delete all events in this divison! Are you sure you want to proceed, this action is permanent."
        );

        if (wantsToDelete) clearScheduleByDivision(divisionNumber);
    };

    return (
        <AuthCheck>
            <button className="toolbar-btn" onClick={() => dispatch(toggleCreateEventModal())}>
                Create event <img src="/icons/file-plus.svg" alt="add-event" />
            </button>

            <button className="toolbar-btn" onClick={handleClearAll}>
                Delete all <img src="/icons/trash.svg" alt="delete-all" />
            </button>

            <CreateEventForm />
        </AuthCheck>
    );
};

export default ScheduleToolbar;
