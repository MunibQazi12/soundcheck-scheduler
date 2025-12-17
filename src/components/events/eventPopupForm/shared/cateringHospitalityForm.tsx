import React from 'react';
import InputWithLabel from './inputWithLabel';

const CateringHospitalityForm = () => {
    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>
                Catering and Hospitality
            </p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label='Meals Provided'
                        name='mealsProvided'
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label='Breaks'
                        name='breaks'
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label='Green Room'
                        name='greenRoom'
                    />
                </div>
                <div className='w-full'>
                    <InputWithLabel
                        label='Special Requests'
                        name='specialRequests'
                    />
                </div>
            </div>
        </>
    );
}

export default CateringHospitalityForm;
