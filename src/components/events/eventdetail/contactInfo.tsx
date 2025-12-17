import { DashboardContxt } from "@/store/dashboardContxt";
import { useContext } from "react"
import SectionHeader from "./sectionHeader";

const ContactInfo = () => {

    const { eventDetails } = useContext(DashboardContxt);

    const {
        clientContactName = "", clientContactEmail = "", clientContactPhoneNumber = "",
        venueContactName = "", venueContactEmail = "", venueContactPhoneNumber = ""
    } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title="Contact Information" />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Client Contact</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">
                    {`${clientContactName}, ${clientContactPhoneNumber}, ${clientContactEmail}`}
                </p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Venue Contact</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">
                    {`${venueContactName}, ${venueContactPhoneNumber}, ${venueContactEmail}`}
                </p>
            </div>
        </div>
    )
}

export default ContactInfo