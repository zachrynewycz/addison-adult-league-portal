"use client";
import Modal from "../../Shared/Modal";
import { Formik, Form, Field } from "formik";
import { toggleCreateEventModal } from "@/app/redux/slices/modalSlice";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { addEvent } from "@/app/firebase/functions/addEvent";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

interface IValues {
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    rink: string;
}

const initialValues: IValues = {
    homeTeam: "",
    awayTeam: "",
    date: "",
    time: "",
    rink: "",
};

const CreateEventForm = () => {
    const dispatch = useAppDispatch();
    const modalState = useAppSelector((state) => state.modal.isCreateEventModalOpen);
    const division = useAppSelector((state) => state.division.divisionNumber);

    const [teams, setTeams] = useState<string[]>([]);

    useEffect(() => {
        const getTeams = async () => {
            const q = query(collection(db, "standings"), where("division", "==", division));
            const teamNamesArray = (await getDocs(q)).docs.map((doc) => doc.data().name);
            setTeams(teamNamesArray);
        };
        getTeams();
    }, []);

    const handleSubmit = (values: IValues, { resetForm }: any) => {
        addEvent({ ...values, division });
        resetForm();
    };

    return (
        <Modal isOpen={modalState}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="text-lg">
                    <h1 className="font-calibre_semi_bold text-2xl">Create new event</h1>

                    <label htmlFor="homeTeam">Home Team</label>
                    <Field name="homeTeam" id="homeTeam" as="select" className="form-select">
                        {teams.map((team, idx) => (
                            <option key={idx} value={team}>
                                {team}
                            </option>
                        ))}
                    </Field>

                    <label htmlFor="awayTeam">Away Team</label>
                    <Field name="awayTeam" id="awayTeam" as="select" className="form-select">
                        {teams.map((team, idx) => (
                            <option key={idx} value={team}>
                                {team}
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
                        </div>

                        <div>
                            <label htmlFor="time">Time</label>
                            <Field name="time" id="time" type="time" className="form-normal-input" />
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
