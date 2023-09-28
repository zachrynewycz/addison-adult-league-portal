import { Form, Formik } from "formik";
import FormikNumberInput from "./FormikNumberInput";

import { updateStanding } from "@/app/firebase/functions/updateStanding";
import { db } from "@/app/firebase/config";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

import Modal from "../../Shared/Modal";

interface Props {
    docId: string;
    editMode: boolean;
    setEditMode: (value: boolean) => void;
}

const UpdateStandingForm = ({ docId, editMode, setEditMode }: Props) => {
    const ref = doc(db, "standings", docId);
    const [standingData, isLoadingStanding] = useDocumentData(ref, {
        initialValue: {
            name: "",
            division: 1,
            wins: 0,
            losses: 0,
            ot_losses: 0,
            games_played: 0,
            goals_against: 0,
            goals_for: 0,
            points: 0,
        },
    });

    if (isLoadingStanding) return null;

    const handleSubmit = (values: any) => {
        updateStanding(values, docId);
        setEditMode(false);
    };

    return (
        <Modal isOpen={editMode}>
            <Formik initialValues={standingData} onSubmit={handleSubmit}>
                <Form className="text-lg">
                    <h1 className="font-calibre_semi_bold text-2xl">Update standings</h1>

                    <div className="flex gap-10 font-calibre_regular">
                        <FormikNumberInput label="Wins" name="wins" />
                        <FormikNumberInput label="Losses" name="losses" />
                        <FormikNumberInput label="OT Losses" name="ot_losses" />
                        <FormikNumberInput label="Goals For" name="goals_for" />
                        <FormikNumberInput label="Goals Against" name="goals_against" />
                    </div>

                    <button
                        className="bg-neutral-800 text-white rounded-md py-2 text-lg w-full font-calibre_regular mt-5"
                        type="submit"
                    >
                        Update
                    </button>

                    <button
                        type="button"
                        className="text-neutral-400 w-full mt-2 font-calibre_regular"
                        onClick={() => setEditMode(false)}
                    >
                        Close
                    </button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default UpdateStandingForm;
