import { useState } from "react";
import EventModal from "../../events/eventModel";
import PlusIcon from "@/assets/svg/plusicon";

const CreateEvent = () => {

    const [eventModal, setEventModal] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setEventModal(true)}
                className="sm:w-[135px] w-1/2 h-9 bg-primary-100 dark:bg-white rounded-md text-white dark:text-heading-text flex justify-center items-center gap-1.5 text-xs leading-normal font-semibold font-aptos">
                <PlusIcon /> Create Event
            </button>
            {
                eventModal ?
                    <EventModal handler={() => setEventModal(false)} />
                    : null
            }
        </>
    );
}

export default CreateEvent;