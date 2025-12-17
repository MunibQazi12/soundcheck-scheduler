import InputWithLabel from "./inputWithLabel";

const TechnicalRequirementsForm = () => {

    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>Technical Requirements</p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Stage Size'}
                        name={'stageSize'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Power Supply'}
                        name={'powerSupply'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Equipment Provided'}
                        name={'equipmentProvided'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Equipment Needed'}
                        name={'equipmentNeeded'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        label={'Sound System'}
                        name={'soundSystem'}
                    />
                </div>
            </div>
        </>
    );
}

export default TechnicalRequirementsForm;
