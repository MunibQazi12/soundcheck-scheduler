import React from 'react';
import InputWithLabel from './inputWithLabel';

const AdditionalForm = () => {
    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>
                Additional Notes
            </p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='w-full'>
                    <InputWithLabel
                        label='Notes'
                        name='notes'
                    />
                </div>
            </div>
        </>
    );
}

export default AdditionalForm;
