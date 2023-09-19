import Modal from "../../Shared/Modal";
import { Formik, Form, Field, FormikValues } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { toggleCreateEventModal } from "@/app/redux/slices/modalSlice";

interface IValues {
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    rink: string;
}

const CreateEventForm = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state: RootState) => state.modal.isCreateEventModalOpen);

    const initialValues: IValues = {
        homeTeam: "",
        awayTeam: "",
        date: "",
        time: "",
        rink: "",
    };

    //Fetch teams on load with useEffect

    const handleSubmit = (values: FormikValues, { resetForm }: any) => {
        console.log(values);
        resetForm();
    };

    return (
        <Modal isOpen={modalState}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <>
                        <label htmlFor="homeTeam">Home Team</label>
                        <Field name="homeTeam" as="select">
                            <option value={1}>1</option>
                        </Field>
                    </>

                    <>
                        <label htmlFor="awayTeam">Away Team</label>
                        <Field name="awayTeam" as="select">
                            <option value={1}>1</option>
                        </Field>
                    </>

                    <>
                        <label htmlFor="date">Date</label>
                        <Field name="rink" as="date" />
                    </>

                    <>
                        <label htmlFor="time">Time</label>
                        <Field name="time" as="time" />
                    </>

                    <>
                        <label htmlFor="rink">Rink</label>
                        <Field name="rink" as="select">
                            <option value="OLY">OLY</option>
                            <option value="NHL">NHL</option>
                        </Field>
                    </>

                    <button onClick={() => dispatch(toggleCreateEventModal())}>Close</button>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default CreateEventForm;
