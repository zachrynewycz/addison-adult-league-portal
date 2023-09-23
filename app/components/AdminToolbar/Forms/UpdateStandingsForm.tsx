import { db } from "@/app/firebase/config";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { doc, getDoc } from "firebase/firestore";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Modal from "../../Shared/Modal";
import { toggleUpdateStandingModal } from "@/app/redux/slices/modalSlice";
import FormikNumberInput from "./FormikNumberInput";
import { updateStanding } from "@/app/firebase/functions/updateStanding";

interface IValues {
    name: string;
    division: number;
    games_played: number;
    wins: number;
    losses: number;
    ot_losses: number;
    points: number;
    goals_for: number;
    goals_against: number;
}

const UpdateStandingForm = ({ docId }: { docId: string }) => {
    const dispatch = useAppDispatch();
    const { isUpdateEventModalOpen } = useAppSelector((state) => state.modal);

    const [initialValues, setInitailValues] = useState<IValues>({
        name: "",
        division: 1,
        wins: 0,
        losses: 0,
        ot_losses: 0,
        games_played: 0,
        goals_against: 0,
        goals_for: 0,
        points: 0,
    });

    useEffect(() => {
        const getDocData = async () => {
            try {
                const docSnap = await getDoc(doc(db, "standings", docId));

                if (docSnap.exists()) {
                    const data: any = docSnap.data();
                    setInitailValues({ ...data });
                }
            } catch (error) {
                alert("Error getting document data");
                toggleUpdateStandingModal();
            }
        };
        getDocData();
    }, [docId]);

    const handleSubmit = (values: IValues) => {
        updateStanding(values, docId)
    };

    return (
        <>
            <button className="" onClick={() => dispatch(toggleUpdateStandingModal())}>
                <img src="/icons/edit-3.svg" alt="edit" />
            </button>

            <Modal isOpen={isUpdateEventModalOpen}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form className="text-lg">
                        <h1 className="font-calibre_semi_bold text-2xl">Update standings</h1>

                        <div className="flex justify-around">
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
                            onClick={() => dispatch(toggleUpdateStandingModal())}
                        >
                            Close
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
};

export default UpdateStandingForm;
