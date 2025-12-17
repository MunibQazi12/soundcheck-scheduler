import { DashboardContxt } from "@/store/dashboardContxt";
import { useContext } from "react"
import SectionHeader from "./sectionHeader";

const EmergencyInfo = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const { emergencyContacts = "", venueEmergencyProcedures = "" } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title="Emergency Information" />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Emergency Contacts</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{emergencyContacts}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Venue Emergency Procedures</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{venueEmergencyProcedures}</p>
            </div>
        </div>
    )
}

export default EmergencyInfo;