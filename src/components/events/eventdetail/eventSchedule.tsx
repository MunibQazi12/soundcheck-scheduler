import { DashboardContxt } from "@/store/dashboardContxt"
import { useContext } from "react"
import SectionHeader from "./sectionHeader"
import { formatTime } from "@/utils/formatTime"

const EventSchedule = () => {

    const { eventDetails } = useContext(DashboardContxt)
    const { ceremonyTime = "", cocktailHour = "", dinnerTime = "", speechesToasts = "", receptionTimeline = "" } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title="Event Schedule" />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Ceremony Time</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{formatTime(ceremonyTime)}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Cocktail Hour</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{formatTime(cocktailHour)}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Dinner Time</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{formatTime(dinnerTime)}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Speeches/Toasts</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{formatTime(speechesToasts)}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Reception Timeline</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{formatTime(receptionTimeline)}</p>
            </div>
        </div>
    )
}

export default EventSchedule;