import React, { useRef } from 'react'
import useClickOutside from '@/hooks/useClickOutside';
import CloseIcon from '@/assets/svg/closeicon';
import Groups from './gruops';
import Group1 from "../../../../../assets/images/group1.png"
import Group2 from "../../../../../assets/images/group2.png"
import Group3 from "../../../../../assets/images/group3.png"
import RightupArrow from '@/assets/svg/rightuparrow';
import BandPeople from './people';
import people1 from "/src/assets/images/chatquestion.png"
import drums from "/src//assets/images/drums.png"
import saxophone from "/src//assets/images/chatanswer.png"
import trumbones from "/src//assets/images/trumbone.png"
import guitarist from "/src//assets/images/guatrist.png"
import trumpet from "/src//assets/images/avatar-2.png"


const BAND_NAME = [
    { groupname: 'Radiant Echo', icon: Group1 },
    { groupname: 'Mystic Rhythm', icon: Group2 },
    { groupname: 'Vivid Dreamers', icon: Group3 },
]

const BAND_PEOPLE = [
    { icon: people1, role: 'Bass', name: 'Morgan Hayes' },
    { icon: saxophone, role: 'Saxophone', name: 'Riley Bennett' },
    { icon: drums, role: 'Drums', name: 'Logan Pierce' },
    { icon: trumbones, role: 'Trombone', name: 'Jamie Sinclair' },
    { icon: guitarist, role: 'Electric Guitar', name: 'Alex Rowan' },
    { icon: trumpet, role: 'Trumpet', name: 'Hunter Black' },
    { icon: drums, role: 'Drums', name: 'Rowan Scott' },
]

interface Props {
    handler: () => void;
}

const EditBand = ({ handler }: Props) => {

    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, handler);

    return (
        <div className='max-w-xl h-[70vh] top-[13vh]  w-full mx-auto border border-lightLavender-gray dark:border-lightGray bg-pastel-purple dark:bg-dark-primary-50 rounded-2.5xl pt-[22px] sm:pl-11 sm:pr-9 px-6 pb-9 absolute left-0 right-0'>
            <div className='sticky top-0'>
                <button
                    onClick={handler}
                    type='button'
                    className='float-right'>
                    <CloseIcon />
                </button>
                <p className='py-2 border-b border-lightLavender-gray dark:border-lightGray text-base font-inter text-heading-text dark:text-darkheading'>Edit Band</p>
                <div className='mt-[14px] mb-7 sm:pr-4 flex flex-col gap-2.5'>
                    <p className='text-xs leading-normal text-heading-text dark:text-darkheading font-inter'>Groups</p>
                    {
                        BAND_NAME.map((item, index) => <Groups key={index} item={item} />)
                    }
                    <button
                        type='button'
                        className='mt-5 w-[90px] h-8 rounded-md py-1 px-5 flex gap-1.5 items-center text-xs leading-normal font-semibold bg-primary-100 text-white dark:bg-dark-primary-100 dark:text-darkText'
                    >
                        Save
                        <div className='w-[18px] h-[18px] rounded-full bg-white dark:bg-dark-primary-50 flex items-center justify-center'><RightupArrow /></div>
                    </button>
                </div>
            </div>
            <div className='border-t h-[27vh] overflow-auto lightpurplescrollbar pr-2.5 border-lightLavender-gray dark:border-lightGray w-full pt-4 flex flex-col gap-[15px]'>
                <p className='text-xs leading-normal text-heading-text dark:text-darkheading font-inter'>People</p>
                <div className='sm:flex hidden w-full justify-end'>
                    <div className='w-[170px] flex gap-2 justify-end items-center'>
                        <p className='w-[34px] text-[10px] leading-normal text-heading-text dark:text-darkheading text-center'>ADD</p>
                        <p className='w-[34px] text-[10px] leading-normal text-heading-text dark:text-darkheading text-center'>SWAP</p>
                        <p className='w-[82px] text-[10px] leading-normal text-heading-text dark:text-darkheading text-center'>PAY</p>
                    </div>
                </div>
                {
                    BAND_PEOPLE.map((item, index) => <BandPeople key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default EditBand