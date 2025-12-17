'use client'
import { useContext } from "react";
import Event from "./event";
import { DashboardContxt } from "@/store/dashboardContxt";

const Events = () => {

    const { events } = useContext(DashboardContxt);

    return (
        <>
            {
                [...events].map((event, index) => <Event key={index} event={event}/>)
            }
        </>
    );
}

export default Events;