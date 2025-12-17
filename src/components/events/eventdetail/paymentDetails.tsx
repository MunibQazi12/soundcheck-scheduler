import { DashboardContxt } from "@/store/dashboardContxt"
import { useContext } from "react"
import SectionHeader from "./sectionHeader";

const PaymentDetails = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const { fee = "", deposit = "", balanceDue = "", paymentMethod = "", paymentSchedule = "" } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title="Payment Details" />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Fee</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{`$${fee}`}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Deposit</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{`$${deposit}`}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Balance Due</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{`$${balanceDue}`}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Payment Method</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{paymentMethod}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Payment Schedule</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{paymentSchedule}</p>
            </div>
        </div>)
}

export default PaymentDetails