import { DashboardContxt } from '@/store/dashboardContxt';
import { useContext } from 'react';
import SectionHeader from './sectionHeader';
import { formatTime } from '@/utils/formatTime';

const Logistics = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const { arrivalTime = "", soundCheckTime = "", loadInInstructions = "" } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title='Logistics' />
            <div className='flex gap-5 justify-between'>
                <div className='w-1/2 border-b border-lightLavender-gray dark:border-lightGray'>
                    <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Arrival Time</p>
                    <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{formatTime(arrivalTime)}</p>
                </div>

                <div className='w-1/2 border-b border-lightLavender-gray dark:border-lightGray'>
                    <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Sound Check Time</p>
                    <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{formatTime(soundCheckTime)}</p>
                </div>
            </div>
            <div className='mt-1.5'>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Load-in Instructions</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{loadInInstructions}</p>
            </div>
        </div>
    )
}

export default Logistics