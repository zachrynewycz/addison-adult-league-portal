import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { toggleCreateEventModal } from "@/app/redux/slices/modalSlice";
import { clearScheduleByDivision } from "@/app/firebase/functions/clearScheduleByDivision";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import CreateEventForm from "./Forms/CreateEventForm";

const ScheduleToolbar = () => {
    const [user] = useAuthState(auth);

    const dispatch = useAppDispatch();
    const { divisionNumber } = useAppSelector((state) => state.division);

    const handleClearAll = () => {
        const wantsToDelete = confirm(
            "You are about to delete all events in this divison! Are you sure you want to proceed, this action is permanent."
        );

        if (wantsToDelete) clearScheduleByDivision(divisionNumber);
    };

    // if (!user) return null;

    return (
        <div>
            <button className="toolbar-btn" onClick={() => dispatch(toggleCreateEventModal())}>
                Create event <img src="/icons/file-plus.svg" alt="add-event" />
            </button>

            <button className="toolbar-btn" onClick={handleClearAll}>
                Delete all
                <img src="/icons/trash.svg" alt="delete-all" />
            </button>

            <CreateEventForm />
        </div>
    );
};

export default ScheduleToolbar;
