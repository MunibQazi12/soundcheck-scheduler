import { useContext } from 'react'
import { DashboardContxt } from '@/store/dashboardContxt';
import SectionHeader from './sectionHeader';

const PerformanceDetails = () => {

    const { eventDetails } = useContext(DashboardContxt);
    const {
        eventType = "",
        setList = [],
        specialRequests = "",
        firstDanceSong = "", fatherDaughterDanceSong = "", motherSonDanceSong = "", additionalDanceSongs = "",
        themeSongs = '', backgroundMusic = '',
        specialFocusAreas = '', rehearsalPerformanceNotes = '',
    } = eventDetails || {}

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-[14px] pr-[14px] pb-4 pl-5 rounded-large">
            <SectionHeader title='Performance Details' />
            <div>
                <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Set List</p>
                {
                    setList?.map((item, index) => {
                        return (
                            <p key={index} className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{item}</p>
                        );
                    })
                }
            </div>
            <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
            {
                !['rehearsal'].includes(eventType)
                    ? <> <div>
                        <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Special Requests</p>
                        <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{specialRequests}</p>
                    </div>
                        <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
                    </>
                    : null
            }

            {
                ['wedding'].includes(eventType)
                    ? <>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">First Dance Song</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{firstDanceSong}</p>
                        </div>
                        <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Father-Daughter Dance Song</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{fatherDaughterDanceSong}</p>
                        </div>
                        <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Mother-Son Dance Song</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{motherSonDanceSong}</p>
                        </div>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Additional Dances/Songs</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{additionalDanceSongs}</p>
                        </div>
                    </>
                    : null
            }
            {
                ['corporate', 'party', 'barClub'].includes(eventType)
                    ? <>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Theme Songs</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{themeSongs}</p>
                        </div>
                        <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Background Music</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{backgroundMusic}</p>
                        </div>

                    </>
                    : null
            }

            {
                ['rehearsal'].includes(eventType)
                    ? <>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Special Focus Areas</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{specialFocusAreas}</p>
                        </div>
                        <div className="my-1.5 w-full h-[1px] bg-lightLavender-gray dark:bg-lightGray"></div>
                        <div>
                            <p className="text-xs leading-normal text-dark-gray dark:text-darkText font-inter">Notes</p>
                            <p className="text-xs leading-normal font-semibold text-heading-text dark:text-darkheading capitalize">{rehearsalPerformanceNotes}</p>
                        </div>
                    </>
                    : null
            }

        </div>
    )
}

export default PerformanceDetails