import { DashboardContxt } from '@/store/dashboardContxt'
import React, { useContext } from 'react'

const Header = () => {

    const { getNextEventDetails, getPreviousEventDetails} = useContext(DashboardContxt);

    return (
        <div className="bg-white dark:bg-dark-primary-100 py-[19px] px-8 flex gap-2 items-center">
            <button
                onClick={getPreviousEventDetails}
                type='button'
                className="py-2.5 px-3 w-32 h-9 bg-primary-100 dark:bg-dark-primary-50 rounded-md text-xs leading-normal text-white font-semibold"
            >
                Previous Events
            </button>
            <button
                onClick={getNextEventDetails}
                type='button'
                className="py-2.5 px-3 w-32 h-9 bg-[#F8F4FF] rounded-md text-xs leading-normal text-heading-text font-semibold"
            >
                Upcoming Event
            </button>
        </div>
    )
}

export default Header