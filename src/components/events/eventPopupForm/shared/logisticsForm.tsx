import InputWithLabel from "./inputWithLabel";

const LogisticsForm = () => {
    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>Logistics</p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Arrival Time'}
                        name={'arrivalTime'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Sound Check Time'}
                        name={'soundCheckTime'}
                    />
                </div>
                <div className='w-full'>
                    <InputWithLabel
                        label={'Load-in Instructions'}
                        name={'loadInInstructions'}
                    />
                </div>
                <div className='w-full'>
                    <InputWithLabel
                        label={'Parking Information'}
                        name={'parkingInformation'}
                    />
                </div>
            </div>
        </>
    );
}

export default LogisticsForm;
