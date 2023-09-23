import UpdateStandingForm from "@/app/components/AdminToolbar/Forms/UpdateStandingsForm";
import AuthCheck from "@/app/components/Shared/AuthCheck";
import { deleteStanding } from "@/app/firebase/functions/deleteStanding";

const AdminButtons = ({ docId }: { docId: string }) => {
    return (
        <AuthCheck>
            <td>
                <UpdateStandingForm docId={docId} />

                <button onClick={() => deleteStanding(docId)}>
                    delete
                    <img src="" alt="delete" />
                </button>
            </td>
        </AuthCheck>
    );
};

export default AdminButtons;
