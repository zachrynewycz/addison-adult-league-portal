import { Formik, Form, Field, ErrorMessage } from "formik";
import { toggleCreateTeamModal } from "@/app/redux/slices/modalSlice";
import { addTeamStanding } from "@/app/firebase/functions/addTeamStanding";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Modal from "../../Shared/Modal";

interface IValues {
    name: string;
    division: number;
}

const initialValues: IValues = {
    name: "",
    division: 1,
};

const validateForm = (values: IValues) => {
    const errors: any = {};

    if (!values.name) errors.name = "Name is required";
    return errors;
};

const CreateTeamForm = () => {
    const dispatch = useAppDispatch();
    const { isCreateTeamModalOpen } = useAppSelector((state) => state.modal);

    const handleSubmit = (values: IValues, { resetForm }: any) => {
        addTeamStanding(values.name, values.division);
        resetForm();
    };

    return (
        <Modal isOpen={isCreateTeamModalOpen}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
                <Form className="text-lg">
                    <h1 className="font-calibre_semi_bold text-2xl">Add team</h1>

                    <div className="flex gap-5">
                        <div>
                            <label htmlFor="name">Team Name</label>
                            <Field type="text" name="name" className="form-normal-input" />
                            <ErrorMessage name="name" component="div" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="division">Division</label>
                            <Field name="division" id="division" as="select" className="form-normal-input">
                                <option value="">Select division</option>
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
                        onClick={() => dispatch(toggleCreateTeamModal())}
                    >
                        Close
                    </button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default CreateTeamForm;
