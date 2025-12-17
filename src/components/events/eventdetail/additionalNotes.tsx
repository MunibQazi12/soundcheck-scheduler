import { DashboardContxt } from '@/store/dashboardContxt';
import { useContext } from 'react'
import SectionHeader from './sectionHeader';

const AdditionalNotes = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const { notes = "" } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title='Additional Notes' />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Notes</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{notes}</p>
            </div>
        </div>
    )
}

export default AdditionalNotes;