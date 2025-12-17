import InputWithLabel from "./inputWithLabel";

const PaymentDetailsForm = () => {

    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>Payment Details</p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="number"
                        label={'Fee'}
                        name={'fee'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Deposit'}
                        name={'deposit'}
                        type="number"
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="number"
                        label={'Balance Due'}
                        name={'balanceDue'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Payment Method'}
                        name={'paymentMethod'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Payment Schedule'}
                        name={'paymentSchedule'}
                    />
                </div>
            </div>
        </>
    );
}

export default PaymentDetailsForm;
