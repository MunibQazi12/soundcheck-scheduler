import useClickOutside from '@/hooks/useClickOutside';
import React, { useContext, useRef } from 'react';
import EventPopupWrapper from '@/components/events/eventPopupForm/eventPopupWrapper';
import PopupSetupForm from '@/components/events/eventPopupForm/popupSetupForm';
import { DashboardContxt } from '@/store/dashboardContxt';

interface Props {
    handler: () => void;
}

const EventModal = ({ handler }: Props) => {

    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, handler);

    const { formik } = useContext(DashboardContxt)
    const { handleSubmit } = formik;

    return (
        <div className="bg-[#0000009c] dark:bg-dark-primary-100 bg-opacity-30 dark:opacity-100 w-full h-full fixed top-0 left-0 flex justify-center items-center overflow-y-auto z-10">
            <div ref={ref}>
                <EventPopupWrapper
                    modalHandler={handler}
                >
                    <form onSubmit={() => {
                        handleSubmit();
                        handler();
                    }} className='px-1'>
                        <PopupSetupForm />
                    </form>
                </EventPopupWrapper>
            </div>
        </div>
    )
}

export default EventModal