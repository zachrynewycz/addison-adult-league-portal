import AuthCheck from "@/app/components/Shared/AuthCheck";
import { deleteEvent } from "@/app/firebase/functions/deleteEvent";

interface Props {
    docId: string;
}

const EditButtons = ({ docId }: Props) => {
    return (
        <AuthCheck>
            <td>
                <button>edit</button>
                <button onClick={() => deleteEvent(docId)}>delete</button>
            </td>
        </AuthCheck>
    );
};

export default EditButtons;
