import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Profile, ProfileContxt } from '@/store/profileContxt';

const validationSchema = Yup.object({
    industry: Yup.string().required('Industry is required'),
    name: Yup.string().required('Name is required'),
    username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must not exceed 20 characters')
        .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain alphanumeric characters and underscores'),
    companyName: Yup.string().required('Company Name is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    website: Yup.string().url('Invalid URL').required('Website is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    facebookProfile: Yup.string().url('Invalid URL').required('Facebook Profile is required'),
    twitterProfile: Yup.string().url('Invalid URL').required('Twitter Profile is required'),
    linkedinProfile: Yup.string().url('Invalid URL').required('Linkedin Profile is required'),
    instagramProfile: Yup.string().url('Invalid URL').required('Instagram Profile is required'),
});

const Infoform: React.FC = () => {

    const { profileHandler, profile } = useContext(ProfileContxt)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const formik = useFormik<Profile>({
        initialValues: profile,
        validationSchema,
        onSubmit: values => {
            profileHandler(values);
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 1 * 1000);
        },
    });

    return (
        <div className="sm:mt-4 pt-0.5 lg:pl-8 w-full lg:max-w-[904px] max-w-full">
            <h2 className="text-heading-text dark:text-darkheading leading-normal xl:leading-[54px] text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-bold font-manrope">
                Enter your info
            </h2>
            <p className="text-heading-text dark:text-darkText font-light font-nunito sm:text-base text-sm sm:leading-normal leading-6">
                We use this info to pre-populate all of your designs. Everything is optional. You can change this later.
            </p>
            <form onSubmit={formik.handleSubmit} className="mt-5">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    {(Object.keys(formik.values) as Array<keyof Profile>).map((field) => (
                        <div className="w-full" key={field}>
                            <label className="sm:text-base text-sm font-semibold sm:leading-normal leading-6 font-nunito text-heading-text dark:text-darkText">
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                            <div className="mt-1.5">
                                <input
                                    type={field === 'email' ? 'email' : field === 'phoneNumber' ? 'tel' : 'text'}
                                    {...formik.getFieldProps(field)}
                                    onBlur={formik.handleBlur}
                                    className="w-full outline-none text-ellipsis overflow-hidden whitespace-nowrap bg-transparent border border-solid border-[#F4F4F4] dark:border-lightGray dark:bg-dark-primary-50 rounded-[5px] py-[15px] px-[17px] sm:text-base text-sm font-nunito font-light sm:leading-normal leading-6 text-lightGray dark:text-darkText"
                                />
                                {formik.touched[field] && formik.errors[field] ? (
                                    <div className="text-red-500 text-sm">{formik.errors[field]}</div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex'>
                    <button
                        type="submit"
                        className="mt-6 mb-[31px] bg-primary-100 dark:bg-dark-primary-50 rounded-md w-full text-[#FFFFFF] px-3 h-11 md:h-[53px] items-center mx-auto lg:mx-0 max-w-[180px] font-aptos flex justify-center items-center sm:text-base text-sm sm:leading-normal leading-6 font-semibold"
                    >
                        {showSuccessMessage ? 'Saved' : 'Save'}
                        {showSuccessMessage
                            ? <div className="flex justify-center items-center border ml-[9px] border-solid border-[#412161] dark:border-dark-primary-100 w-7 h-7 bg-green-500 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            : <div className="flex justify-center items-center border ml-[9px] border-solid border-[#412161] dark:border-dark-primary-100 w-7 h-7 bg-white dark:bg-dark-primary-100 rounded-full">
                                <svg
                                    width="7"
                                    height="7"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.5 1C6.5 0.723857 6.27614 0.5 6 0.5L1.5 0.5C1.22386 0.5 1 0.723857 1 1C1 1.27614 1.22386 1.5 1.5 1.5L5.5 1.5L5.5 5.5C5.5 5.77614 5.72386 6 6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1ZM1.35355 6.35355L6.35355 1.35355L5.64645 0.646446L0.646447 5.64645L1.35355 6.35355Z"
                                        fill="#022452"
                                        className="dark:fill-white"
                                    />
                                </svg>
                            </div>}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Infoform;
