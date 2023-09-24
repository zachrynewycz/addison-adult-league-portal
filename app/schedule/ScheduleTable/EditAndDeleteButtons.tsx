import UpdateEventForm from "@/app/components/AdminToolbar/Forms/UpdateEventForm";
import AuthCheck from "@/app/components/Shared/AuthCheck";
import { deleteEvent } from "@/app/firebase/functions/deleteEvent";

interface Props {
    docId: string;
    editMode: boolean;
    setEditMode: (value: boolean) => void;
}

const EditAndDeleteButtons = ({ docId, editMode, setEditMode }: Props) => {
    return (
        <AuthCheck>
            <td className="flex gap-4 mr-10">
                <button className="w-5" onClick={() => setEditMode(true)}>
                    <img src="/icons/edit-3.svg" alt="edit" />
                </button>

                {editMode && <UpdateEventForm editMode={editMode} setEditMode={setEditMode} docId={docId} />}

                <button className="w-5" onClick={() => deleteEvent(docId)}>
                    <img src="/icons/file-minus.svg" alt="delete" />
                </button>
            </td>
        </AuthCheck>
    );
};

export default EditAndDeleteButtons;
