import Modal from "../../Shared/Modal";
import { Formik, Form, Field, FormikValues } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { toggleCreateTeamModal } from "@/app/redux/slices/modalSlice";

interface IValues {
    teamName: string;
    division: number;
}

const CreateTeamForm = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state: RootState) => state.modal.isCreateTeamModalOpen);

    const initialValues: IValues = {
        teamName: "",
        division: 1,
    };

    const handleSubmit = (values: FormikValues, { resetForm }: any) => {
        console.log(values);
        resetForm();
    };

    return (
        <Modal isOpen={modalState}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <>
                        <label htmlFor="teamName">Team Name:</label>
                        <Field type="text" name="teamName" />
                    </>

                    <>
                        <label htmlFor="division">Division:</label>
                        <Field name="division" as="select">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </Field>
                    </>

                    <div>
                        <button onClick={() => dispatch(toggleCreateTeamModal())}>Close</button>
                        <button type="submit">Create</button>
                    </div>
                </Form>
            </Formik>
        </Modal>
    );
};

export default CreateTeamForm;
