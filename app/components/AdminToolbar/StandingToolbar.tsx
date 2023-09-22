import AuthCheck from "../Shared/AuthCheck";
import CreateTeamForm from "./Forms/CreateTeamForm";

const StandingToolbar = () => {
    return (
        <AuthCheck>
            <button className="toolbar-btn">
                Add team <img src="/icons/user-plus.svg" />
            </button>
            <button className="toolbar-btn">
                Reset standings <img src="/icons/refresh-cw.svg" />
            </button>

            <CreateTeamForm />
        </AuthCheck>
    );
};

export default StandingToolbar;
