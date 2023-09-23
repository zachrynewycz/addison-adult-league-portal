import AuthCheck from "../Shared/AuthCheck";
import CreateTeamForm from "./Forms/CreateTeamForm";
import { resetStandingsToZero } from "@/app/firebase/functions/resetStandingsToZero";

const StandingToolbar = () => {
    const handleResetStandings = () => {
        if (confirm("Are you sure you want to reset all standings to 0")) {
            resetStandingsToZero();
        }
    };

    return (
        <AuthCheck>
            <div>
                <CreateTeamForm />

                <button className="toolbar-btn" onClick={handleResetStandings}>
                    Reset standings <img src="/icons/refresh-cw.svg" />
                </button>
            </div>
        </AuthCheck>
    );
};

export default StandingToolbar;
