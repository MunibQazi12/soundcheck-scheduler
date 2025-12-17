import CloseIcon from '@/assets/svg/closeicon'
import useClickOutside from '@/hooks/useClickOutside';
import Dropdown from '@/shared/dropdown'
import { DashboardContxt } from '@/store/dashboardContxt';
import React, { useContext, useRef } from 'react'

interface Props {
    handler: () => void;
}

const FilterModal = ({ handler }: Props) => {

    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, handler);

    const { events } = useContext(DashboardContxt);

    console.log("events", events)

    return (
        <div ref={ref} className='max-w-[340px] w-full bg-pastel-purple dark:bg-dark-primary-50 dark:border border-lightGray pt-6  pb-9 sm:pl-[30px] sm:pr-7 px-5 absolute sm:right-[144px] z-10'>
            <button
                onClick={handler}
                type="button"
                className='float-right cursor-pointer'>
                <CloseIcon />
            </button>
            <p className='text-base font-inter font-semibold text-heading-text dark:text-darkheading mt-2'>Filter</p>
            <div className='mt-4 flex flex-col gap-[11px]'>
                <Dropdown placeHolder='Select Event' options={[{ label: 'Wedding', id: 1 }, { label: 'Corporate', id: 1 }, { label: 'Party', id: 1 }, { label: 'Bar/Club', id: 1 }, { label: 'Rehearsul', id: 1 }, { label: 'Start from Scratch', id: 1 }]} />
                <Dropdown placeHolder='Category' options={[{ label: 'Category 1', id: 1 }, { label: 'Category 2', id: 1 }, { label: 'Category 4', id: 1 }, { label: 'Category 4', id: 1 }]} />
                <div className="w-full relative">
                    <input type="date"
                        placeholder='Date/Time'
                        min="2018-01-01" max="2038-12-31"
                        className="w-full h-11 rounded-[5px] cursor-pointer bg-white py-2.5 pl-4 pr-3 text-sm leading-normal text-lightGray dark:text-darkText dark:bg-dark-primary-100 date-input"
                    />
                    <div className="absolute top-4 bg-white z-50 pointer-events-none right-[14px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_7127_1873" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                                <path d="M0 0H14V14H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_7127_1873)">
                                <path d="M6.46223 10.7734H7.53774M9.69503 10.7734H10.7705M3.23567 10.7734H4.31118M6.46223 7.54688H7.53774M9.69503 7.54688H10.7705M3.23567 7.54688H4.31118M0.546875 4.84895H13.4593M10.2328 3.23567V0.546875M3.77344 3.23567V0.546875M2.70413 13.4531H11.3021C12.4935 13.4531 13.4593 12.4873 13.4593 11.2958V3.77967C13.4593 2.58825 12.4935 1.62239 11.3021 1.62239H2.70413C1.51271 1.62239 0.546875 2.58825 0.546875 3.77967V11.2958C0.546875 12.4873 1.51271 13.4531 2.70413 13.4531Z" stroke="#7B7A7A" strokeWidth="0.7" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round" className='dark:stroke-darkText' />
                            </g>
                        </svg>
                    </div>
                </div>

                <Dropdown placeHolder='Location' options={[{ label: 'Lahore', id: 1 }, { label: 'London', id: 1 }, { label: 'New York', id: 1 }, { label: 'Delhi', id: 1 }]} />
            </div>
        </div>
    )
}

export default FilterModal