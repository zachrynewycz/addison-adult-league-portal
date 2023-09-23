import UpdateEventForm from "@/app/components/AdminToolbar/Forms/UpdateEventForm";
import AuthCheck from "@/app/components/Shared/AuthCheck";
import { deleteEvent } from "@/app/firebase/functions/deleteEvent";

const AdminButtons = ({ docId }: { docId: string }) => {
    return (
        <AuthCheck>
            <td>
                <UpdateEventForm docId={docId} />

                <button onClick={() => deleteEvent(docId)}>
                    delete
                    <img src="" alt="delete" />
                </button>
            </td>
        </AuthCheck>
    );
};

export default AdminButtons;
