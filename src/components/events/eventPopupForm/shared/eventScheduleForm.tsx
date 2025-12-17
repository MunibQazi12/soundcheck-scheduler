import InputWithLabel from "./inputWithLabel";

const EventScheduleForm = () => {

    return (
        <>
            <p className='text-sm leading-normal font-semibold text-heading-text dark:text-darkheading font-inter'>Event Schedule</p>
            <div className='mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2.5'>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Ceremony Time'}
                        name={'ceremonyTime'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Cocktail Hour'}
                        name={'cocktailHour'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Dinner Time'}
                        name={'dinnerTime'}
                    />
                </div>
                <div className='lg:w-[49%] xs:w-[48%] w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Speeches / Toasts'}
                        name={'speechesToasts'}
                    />
                </div>
                <div className='w-full'>
                    <InputWithLabel
                        type="time"
                        label={'Reception Timeline'}
                        name={'receptionTimeline'}
                    />
                </div>
            </div>
        </>
    );
}

export default EventScheduleForm;
