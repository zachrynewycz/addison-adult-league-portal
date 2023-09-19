"use client";
import Modal from "../../Shared/Modal";
import { Formik, Form, Field } from "formik";
import { toggleUpdateScoreModal } from "@/app/redux/slices/modalSlice";
import { addTeamStanding } from "@/app/firebase/functions/addTeamStanding";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

interface IValues {
    name: string;
    division: number;
}

const initialValues: IValues = {
    name: "",
    division: 1,
};

const CreateTeamForm = () => {
    const dispatch = useAppDispatch();
    const modalState = useAppSelector((state) => state.modal.isCreateTeamModalOpen);

    const handleSubmit = (values: IValues, { resetForm }: any) => {
        addTeamStanding(values.name, values.division);
        resetForm();
    };

    return (
        <Modal isOpen={modalState}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="text-lg">
                    <h1 className="font-calibre_semi_bold text-2xl">Add team to standing</h1>

                    <div className="flex gap-5">
                        <div>
                            <label htmlFor="teamName">Team Name</label>
                            <Field type="text" name="teamName" className="form-normal-input" />
                        </div>
                        <div>
                            <label htmlFor="division">Division</label>
                            <Field name="division" id="division" as="select" className="form-normal-input">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </Field>
                        </div>
                    </div>

                    <button
                        className="bg-neutral-800 text-white rounded-md py-2 text-lg w-full font-calibre_regular mt-5"
                        type="submit"
                    >
                        Create
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

export default CreateTeamForm;
