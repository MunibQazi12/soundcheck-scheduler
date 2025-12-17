'use client'
import { useContext, useEffect } from "react"
import EventDetail from "./eventdetail"
import Header from "./header"
import Map from "./map"
import { DashboardContxt } from "@/store/dashboardContxt"
import EventModal from "./eventModel"

const Events = () => {

    const { getCurrentEventDetails, eventModal, toggleEventModal } = useContext(DashboardContxt);

    useEffect(() => {
        getCurrentEventDetails();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="bg-[#F8F4FF] dark:bg-dark-primary-100 relative">
                <Header />
                <Map />
                <EventDetail />
            </div>
            {
                eventModal
                    ? <EventModal handler={toggleEventModal} />
                    : null
            }
        </>
    )
}

export default Events