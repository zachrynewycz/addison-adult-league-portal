import { Formik, Form, Field, ErrorMessage } from "formik";
import { toggleCreateEventModal } from "@/app/redux/slices/modalSlice";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { addEvent } from "@/app/firebase/functions/addEvent";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Modal from "../../Shared/Modal";

interface IValues {
    home_team: string;
    away_team: string;
    date: string;
    time: string;
    rink: string;
    away_score: number;
    home_score: number;
    status: string;
}

const initialValues: IValues = {
    home_team: "",
    away_team: "",
    date: "",
    time: "",
    rink: "",
    away_score: 0,
    home_score: 0,
    status: "",
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

    const [teams, setTeams] = useState<string[]>([]);

    useEffect(() => {
        const getTeams = async () => {
            const q = query(collection(db, "standings"), where("division", "==", divisionNumber));
            const teamNamesArray = (await getDocs(q)).docs.map((doc) => doc.data().name);

            if (teamNamesArray.length === 0) {
                alert("Add a team in the standings to create an event");
            }
            setTeams(teamNamesArray);
        };
        getTeams();
    }, []);

    const handleSubmit = (values: IValues, { resetForm }: any) => {
        addEvent({ ...values, division: divisionNumber });
        resetForm();
    };

    return (
        <Modal isOpen={isCreateEventModalOpen}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
                <Form className="text-lg">
                    <h1 className="font-calibre_semi_bold text-2xl">Create new event</h1>

                    <label htmlFor="home_team">Home Team</label>
                    <Field name="home_team" id="home_team" as="select" className="form-select">
                        <option value="">Select Home Team</option>
                        {teams.map((team, idx) => (
                            <option key={idx} value={team}>
                                {team}
                            </option>
                        ))}
                    </Field>

                    <label htmlFor="away_team">Away Team</label>
                    <Field name="away_team" id="away_team" as="select" className="form-select">
                        <option value="">Select Away Team</option>
                        {teams.map((team, idx) => (
                            <option key={idx} value={team}>
                                {team}
                            </option>
                        ))}
                    </Field>

                    <label htmlFor="rink">Rink</label>
                    <Field name="rink" id="rink" as="select" className="form-select">
                        <option value="">Select Rink</option>
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

                    <div className="flex justify-around">
                        <div>
                            <label htmlFor="home_score">Home Score</label>
                            <input
                                type="number"
                                name="home_score"
                                id="home_score"
                                placeholder="0"
                                defaultValue={0}
                                min={0}
                                className="form-normal-input w-20 text-4xl"
                            />
                        </div>
                        <div>
                            <label htmlFor="away_score">Away Score</label>
                            <input
                                type="number"
                                name="away_score"
                                id="away_score"
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
