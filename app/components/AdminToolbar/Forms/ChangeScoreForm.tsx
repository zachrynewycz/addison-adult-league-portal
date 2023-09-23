import { Field, Form, Formik } from "formik";
import Modal from "../../Shared/Modal";
import { updateScore } from "@/app/firebase/functions/updateScore";
import { toggleUpdateScoreModal } from "@/app/redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

interface IScores {
    homeScore: string;
    awayScore: string;
    status: string;
}

const initialValues = {
    homeScore: "",
    awayScore: "",
    status: "",
};

const ChangeScoreForm = ({ docId }: { docId: string }) => {
    const dispatch = useAppDispatch();
    const { isUpdateScoreModalOpen } = useAppSelector((state) => state.modal);

    const handleSubmit = (values: IScores, { resetForm }: any) => {
        updateScore(`${values.homeScore} - ${values.awayScore} ${values.status}`, docId);
        resetForm();
    };

    return (
        <Modal isOpen={isUpdateScoreModalOpen}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="text-lg">
                    <h1 className="font-calibre_semi_bold text-2xl">Update score</h1>

                    <div className="flex justify-around">
                        <div>
                            <label htmlFor="homeScore">Home Score</label>
                            <input
                                type="number"
                                name="homeScore"
                                id="homeScore"
                                placeholder="0"
                                defaultValue={0}
                                min={0}
                                className="form-normal-input w-20 text-4xl"
                            />
                        </div>
                        <div>
                            <label htmlFor="awayScore">Away Score</label>
                            <input
                                type="number"
                                name="awayScore"
                                id="awayScore"
                                placeholder="0"
                                defaultValue={0}
                                min={0}
                                className="form-normal-input w-20 text-4xl"
                            />
                        </div>
                    </div>

                    <label htmlFor="status">Game Status</label>
                    <Field name="status" id="status" as="select" className="form-select">
                        <option value="">Upcoming</option>
                        <option value="">Final</option>
                        <option value="OT">Final OT</option>
                        <option value="SO">Final SO</option>
                    </Field>

                    <button
                        className="bg-neutral-800 text-white rounded-md py-2 text-lg w-full font-calibre_regular mt-5"
                        type="submit"
                    >
                        Update
                    </button>
                    <button
                        type="button"
                        className="text-neutral-400 w-full mt-2 font-calibre_regular"
                        onClick={() => dispatch(toggleUpdateScoreModal())}
                    >
                        Close
                    </button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default ChangeScoreForm;
