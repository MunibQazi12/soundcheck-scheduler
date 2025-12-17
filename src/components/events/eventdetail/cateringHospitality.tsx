import { DashboardContxt } from '@/store/dashboardContxt';
import React, { useContext } from 'react'
import SectionHeader from './sectionHeader';

const CateringHospitality = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const { mealsProvided = "", breaks = "", greenRoom = "" } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title='Catering and Hospitality' />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Meals Provided</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{mealsProvided}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Breaks</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{breaks}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Green Room</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{greenRoom}</p>
            </div>

        </div>
    )
}

export default CateringHospitality;