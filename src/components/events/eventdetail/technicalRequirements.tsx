import { DashboardContxt } from '@/store/dashboardContxt'
import { useContext } from 'react'
import SectionHeader from './sectionHeader';

const TecehnicalRequirements = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const { stageSize = "", powerSupply = "", equipmentNeeded = "", equipmentProvided = "", soundSystem = "" } = eventDetails || {};

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title='Technical Requirements' />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Stage Size</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{stageSize}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Power Supply</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{powerSupply}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Equipment Provided</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{equipmentProvided}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Equipment Needed</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{equipmentNeeded}</p>
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Sound System</p>
                <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{soundSystem}</p>
            </div>
        </div>
    )
}

export default TecehnicalRequirements;