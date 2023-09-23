import { useAppSelector } from "@/app/redux/hooks";
import { clearScheduleByDivision } from "@/app/firebase/functions/clearScheduleByDivision";
import CreateEventForm from "./Forms/CreateEventForm";
import AuthCheck from "../Shared/AuthCheck";

const ScheduleToolbar = () => {
    const handleClearAll = () => {
        const { divisionNumber } = useAppSelector((state) => state.division);

        if (prompt("You are about to delete all events in this divison. Enter DELETE to continue") === "DELETE") {
            clearScheduleByDivision(divisionNumber);
        }
    };

    return (
        <AuthCheck>
            <div>
                <CreateEventForm />

                <button className="toolbar-btn" onClick={handleClearAll}>
                    Delete all <img src="/icons/trash.svg" alt="delete-all" />
                </button>
            </div>
        </AuthCheck>
    );
};

export default ScheduleToolbar;
