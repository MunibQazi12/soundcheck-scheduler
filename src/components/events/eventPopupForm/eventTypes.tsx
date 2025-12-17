import { useContext } from "react";
import EventTypeButton from "./eventTypeButton";
import { DashboardContxt } from "@/store/dashboardContxt";

const EVENT_TYPES = [
    { id: 1, label: 'Wedding', value: 'wedding' },
    { id: 2, label: 'Corporate', value: 'corporate' },
    { id: 3, label: 'Party', value: 'party' },
    { id: 4, label: 'Bar / Club', value: 'barClub' },
    { id: 5, label: 'Rehearsal', value: 'rehearsal' },
    { id: 6, label: 'Start from scratch', value: 'startFromScratch' },
]

const EventTypes = () => {

    const { eventTypeHandler, eventType } = useContext(DashboardContxt);

    return (
        <>
            <p className="text-base text-heading-text dark:text-darkheading font-semibold font-inter text-center">Select Event Type</p>
            <div className="mt-3 xl:mt-7 pb-5 xl:pb-10 border-b border-lightLavender-gray dark:border-lightGray flex gap-5 justify-between items-center flex-wrap">
                {
                    EVENT_TYPES?.map((item) => {
                        const { id, label, value } = item;
                        return (
                            <div
                                key={id}
                                className='lg:w-[31.75%] md:w-[31%] xs:w-[47%] w-full'>
                                <EventTypeButton
                                    isSelected={eventType === value}
                                    label={label}
                                    handler={() => eventTypeHandler(value)}
                                />
                            </div>);
                    })
                }
            </div>
        </>
    );
}

export default EventTypes;