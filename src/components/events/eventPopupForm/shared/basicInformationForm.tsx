import { useContext } from "react";
import InputWithLabel from "./inputWithLabel";
import { DashboardContxt } from "@/store/dashboardContxt";

const BasicInformationForm = () => {
    const { formik } = useContext(DashboardContxt);

    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>Basic Information</p>
            <div className='mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='w-full'>
                    <InputWithLabel
                        label={'Event Name'}
                        name={'eventName'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="date"
                        label={'Date'}
                        name={'date'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Time'}
                        name={'time'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Start Time'}
                        type="time"
                        name={'startTime'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'End Time'}
                        type="time"
                        name={'endTime'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Location'}
                        name={'location'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'GPS Coordinates / Map Link'}
                        name={'gpsCoordinates'}
                    />
                </div>
            </div>
        </>
    );
}

export default BasicInformationForm;
