import { DashboardContxt } from "@/store/dashboardContxt";
import { useContext } from "react";

interface Props {
    label: string;
    name: string;
    type?: string
}

const InputWithLabel = ({
    label,
    name,
    type = "text"
}: Props) => {

    const { formik } = useContext(DashboardContxt)
    const { handleBlur, handleChange, values, touched, errors } = formik;
    const error = touched?.[name] && errors?.[name]

    return (
        <div>
            <label
                htmlFor={name}
                className={`text-xs leading-normal text-dark-gray dark:text-darkText`}
            >
                {label}
            </label>
            <div className='w-full'>
                <input
                    type={type}
                    name={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.[name]}
                    id={name}
                    className={`w-full h-11 px-2 bg-white dark:bg-dark-primary-50 rounded-[5px] text-xs leading-normal text-dark-gray dark:text-darkText`}
                />
            </div>
            {
                error ?
                    <span className="text-red-600">{error}</span>
                    : null
            }
        </div>
    );
}

export default InputWithLabel;