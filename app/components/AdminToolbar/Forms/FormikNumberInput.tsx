import { Field } from "formik";

interface Props {
    name: string;
    label: string;
}

const FormikNumberInput = ({ name, label }: Props) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field type="number" name={name} id={name} min={0} className="form-normal-input w-20 text-4xl" />
    </div>
);

export default FormikNumberInput;
