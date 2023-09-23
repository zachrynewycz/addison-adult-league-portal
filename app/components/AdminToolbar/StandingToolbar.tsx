import { useAppDispatch } from "@/app/redux/hooks";
import AuthCheck from "../Shared/AuthCheck";
import CreateTeamForm from "./Forms/CreateTeamForm";
import { toggleCreateTeamModal } from "@/app/redux/slices/modalSlice";
import { resetStandingsToZero } from "@/app/firebase/functions/resetStandingsToZero";

const StandingToolbar = () => {
    const dispatch = useAppDispatch();

    const handleResetStandings = () => {
        const proceed = confirm("Are you sure you want to reset all standings");

        if (proceed) {
            resetStandingsToZero();
        }
    };

    return (
        <AuthCheck>
            <div>
                <button className="toolbar-btn" onClick={() => dispatch(toggleCreateTeamModal())}>
                    Add team <img src="/icons/user-plus.svg" />
                </button>
                <button className="toolbar-btn" onClick={handleResetStandings}>
                    Reset standings <img src="/icons/refresh-cw.svg" />
                </button>

                <CreateTeamForm />
            </div>
        </AuthCheck>
    );
};

export default StandingToolbar;
