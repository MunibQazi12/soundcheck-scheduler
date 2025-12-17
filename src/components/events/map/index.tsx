import Lockicon from "@/assets/svg/lockicon"
import MapImage from "./map"
import { useContext } from "react"
import { DashboardContxt } from "@/store/dashboardContxt"
import dayjs from "dayjs"
import { EVENT_TYPE } from "@/dump/dashboard"

const Map = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const { eventName = "", eventType = 'wedding', date = new Date(), startTime = "", endTime = "", location = "" } = eventDetails || {};

    return (
        <section className="bg-light-purple dark:bg-dark-primary-50 pt-5 pb-10 sm:px-8 px-5">
            <div className="flex sm:flex-nowrap flex-wrap gap-5 justify-between md:items-center items-start">
                <div className="xs:w-fit w-full">
                    <p className="text-[22px] leading-1.2 text-white dark:text-darkheading font-inter font-bold">{`${eventName} ${EVENT_TYPE[eventType]}`}</p>
                    <div className="mt-2.5 flex md:flex-row flex-col md:items-center md:gap-3 gap-1.5 text-white dark:text-darkText font-inter text-xs leading-normal">
                        <span>{dayjs(date).format('MMMM DD, YYYY')}</span>
                        <span className="w-[1px] h-[18px] bg-white dark:bg-lightGray md:block hidden"></span>
                        <span>{`${startTime} PM - ${endTime} PM`}</span>
                        <span className="w-[1px] h-[18px] bg-white dark:bg-lightGray md:block hidden"></span>
                        <span>{location}</span>
                    </div>
                </div>
                <div className="flex gap-2.5 items-center xs:w-fit w-full">
                    <button
                        type="button"
                        className="xs:w-9 w-1/2 h-9 bg-white dark:bg-dark-primary-100 rounded-large flex justify-center items-center">
                        <Lockicon />
                    </button>
                    <button
                        type="button"
                        className="xs:w-[92px] w-1/2 h-9 bg-primary-100 dark:bg-dark-primary-100 rounded-large text-white text-xs leading-normal font-semibold p-2">Notify</button>
                </div>
            </div>
            <MapImage />
        </section>

    )
}

export default Map