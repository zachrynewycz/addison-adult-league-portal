import Modal from "../../Shared/Modal";
import { Formik, Form, Field } from "formik";
import { useAppSelector } from "@/app/redux/hooks";
import { db } from "@/app/firebase/config";
import { collection, doc, query, where } from "firebase/firestore";
import { updateEvent } from "@/app/firebase/functions/updateEvent";
import { useCollectionDataOnce, useDocumentDataOnce } from "react-firebase-hooks/firestore";
import { format } from "date-fns";

interface Props {
    docId: string;
    editMode: boolean;
    setEditMode: (value: boolean) => void;
}

const UpdateEventForm = ({ docId, editMode, setEditMode }: Props) => {
    const { divisionNumber } = useAppSelector((state) => state.division);

    const ref = doc(db, "schedule", docId);
    const q = query(collection(db, "standings"), where("division", "==", divisionNumber));
    const [eventData, isLoadingEventData, eventFetchError] = useDocumentDataOnce(ref);
    const [teamData, isLoadingTeamData, teamFetchError] = useCollectionDataOnce(q);

    if (isLoadingEventData || isLoadingTeamData) return null;

    const iniitalValues = {
        ...eventData,
        date: format(eventData?.date.toDate(), "yyyy-MM-dd"),
    };

    if (teamFetchError || eventFetchError) {
        console.error("There has been an error getting document data", teamFetchError);
    }

    const handleSubmit = (values: any) => {
        updateEvent(values, docId);
        setEditMode(false);
    };

    return (
        <Modal isOpen={editMode}>
            <Formik initialValues={iniitalValues} onSubmit={handleSubmit}>
                <Form className="text-lg text-left font-calibre_regular">
                    <h1 className="font-calibre_semi_bold text-2xl">Update event</h1>

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
                        <option value="">Select Rink</option>
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

                    <div className="flex justify-around">
                        <div>
                            <label htmlFor="home_score">Home Score</label>
                            <Field
                                type="number"
                                name="home_score"
                                id="home_score"
                                min={0}
                                className="form-normal-input w-20 text-4xl"
                            />
                        </div>
                        <div>
                            <label htmlFor="away_score">Away Score</label>
                            <Field
                                type="number"
                                name="away_score"
                                id="away_score"
                                min={0}
                                className="form-normal-input w-20 text-4xl"
                            />
                        </div>
                    </div>

                    <label htmlFor="status">Game Status</label>
                    <Field name="status" id="status" as="select" className="form-select">
                        <option value="">Final</option>
                        <option value="OT">Final OT</option>
                        <option value="SO">Final SO</option>
                    </Field>

                    <div className="flex flex-col">
                        <button
                            className="bg-neutral-800 text-white rounded-md py-2 text-lg w-full font-calibre_regular mt-5"
                            type="submit"
                        >
                            Update
                        </button>

                        <button
                            type="button"
                            className="text-neutral-400 w-full mt-2 font-calibre_regular"
                            onClick={() => setEditMode(!editMode)}
                        >
                            Close
                        </button>
                    </div>
                </Form>
            </Formik>
        </Modal>
    );
};

export default UpdateEventForm;
