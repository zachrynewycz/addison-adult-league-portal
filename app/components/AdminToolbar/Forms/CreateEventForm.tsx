import { Formik, Form, Field, ErrorMessage } from "formik";
import { toggleCreateEventModal } from "@/app/redux/slices/modalSlice";
import { collection, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { addEvent } from "@/app/firebase/functions/addEvent";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Modal from "../../Shared/Modal";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

interface IValues {
    home_team: string;
    away_team: string;
    date: string;
    time: string;
    rink: string;
}

const initialValues: IValues = {
    home_team: "",
    away_team: "",
    date: "",
    time: "",
    rink: "OLY",
};

const validateForm = (values: IValues) => {
    const errors: any = {};

    if (!values.date) errors.date = "Required";
    if (!values.time) errors.time = "Required";
    return errors;
};

const CreateEventForm = () => {
    const dispatch = useAppDispatch();
    const { isCreateEventModalOpen } = useAppSelector((state) => state.modal);
    const { divisionNumber } = useAppSelector((state) => state.division);

    const q = query(collection(db, "standings"), where("division", "==", divisionNumber));
    const [teamData, isLoadingTeamData, teamFetchError] = useCollectionDataOnce(q);

    const handleSubmit = (values: IValues, { resetForm }: any) => {
        addEvent({ ...values, division: divisionNumber });
        resetForm();
    };

    if (isLoadingTeamData || teamFetchError) return null;

    return (
        <Modal isOpen={isCreateEventModalOpen}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
                <Form className="text-lg">
                    <h1 className="font-calibre_semi_bold text-2xl">Create new event</h1>

                    <label htmlFor="home_team">Home Team</label>
                    <Field name="home_team" id="home_team" as="select" className="form-select">
                        <option value="">Select Home Team</option>
                        {teamData?.map((team, idx) => (
                            <option key={idx} value={team.name}>
                                {team.name}
                            </option>
                        ))}
                    </Field>

                    <label htmlFor="away_team">Away Team</label>
                    <Field name="away_team" id="away_team" as="select" className="form-select">
                        <option value="">Select Away Team</option>
                        {teamData?.map((team, idx) => (
                            <option key={idx} value={team.name}>
                                {team.name}
                            </option>
                        ))}
                    </Field>

                    <label htmlFor="rink">Rink</label>
                    <Field name="rink" id="rink" as="select" className="form-select">
                        <option value="OLY">OLY</option>
                        <option value="NHL">NHL</option>
                    </Field>

                    <div className="flex items-center gap-10">
                        <div>
                            <label htmlFor="date">Date</label>
                            <Field name="date" id="date" type="date" className="form-normal-input" />
                            <ErrorMessage name="date" component="div" className="error-message" />
                        </div>

                        <div>
                            <label htmlFor="time">Time</label>
                            <Field name="time" id="time" type="time" className="form-normal-input" />
                            <ErrorMessage name="time" component="div" className="error-message" />
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
                        onClick={() => dispatch(toggleCreateEventModal())}
                    >
                        Close
                    </button>
                </Form>
            </Formik>
        </Modal>
    );
};

export default CreateEventForm;
