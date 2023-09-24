import UpdateStandingForm from "@/app/components/AdminToolbar/Forms/UpdateStandingsForm";
import AuthCheck from "@/app/components/Shared/AuthCheck";
import { deleteStanding } from "@/app/firebase/functions/deleteStanding";

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

                {editMode && <UpdateStandingForm editMode={editMode} setEditMode={setEditMode} docId={docId} />}

                <button className="w-5" onClick={() => deleteStanding(docId)}>
                    <img src="/icons/user-x.svg" alt="delete" />
                </button>
            </td>
        </AuthCheck>
    );
};

export default EditAndDeleteButtons;
