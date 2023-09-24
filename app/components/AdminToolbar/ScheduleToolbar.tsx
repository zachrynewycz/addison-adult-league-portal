import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { clearScheduleByDivision } from "@/app/firebase/functions/clearScheduleByDivision";
import CreateEventForm from "./Forms/CreateEventForm";
import AuthCheck from "../Shared/AuthCheck";
import { toggleCreateEventModal } from "@/app/redux/slices/modalSlice";

const ScheduleToolbar = () => {
    const { divisionNumber } = useAppSelector((state) => state.division);
    const dispatch = useAppDispatch();

    const handleClearAll = () => {
        if (prompt("You are about to delete all events in this divison. Enter DELETE to continue") === "DELETE") {
            clearScheduleByDivision(divisionNumber);
        }
    };

    return (
        <AuthCheck>
            <div>
                <button className="toolbar-btn" onClick={() => dispatch(toggleCreateEventModal())}>
                    Create event <img src="/icons/file-plus.svg" alt="create" />
                </button>
                <button className="toolbar-btn" onClick={handleClearAll}>
                    Delete all <img src="/icons/trash.svg" alt="delete-all" />
                </button>
            </div>
            <CreateEventForm />
        </AuthCheck>
    );
};

export default ScheduleToolbar;
