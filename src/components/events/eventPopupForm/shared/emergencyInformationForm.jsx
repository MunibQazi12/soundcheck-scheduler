import React from 'react';
import InputWithLabel from './inputWithLabel';

const EmergencyInformationForm = () => {
    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>
                Emergency Information
            </p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='w-full'>
                    <InputWithLabel
                        label='Emergency Contacts'
                        name='emergencyContacts'
                    />
                </div>
                <div className='w-full'>
                    <InputWithLabel
                        label='Venue Emergency Procedures'
                        name='venueEmergencyProcedures'
                    />
                </div>
            </div>
        </>
    );
}

export default EmergencyInformationForm;
