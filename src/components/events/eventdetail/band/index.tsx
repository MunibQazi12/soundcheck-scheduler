"use client"
import Editicon from '@/assets/svg/editicon'
import Image from 'next/image'
import React, { useState } from 'react'
import Banduser from './user'
import bassimage from "../../../../assets/images/chatquestion.png"
import saxophone from "../../../../assets/images/chatanswer.png"
import drums from "../../../../assets/images/drums.png"
import trumbones from "../../../../assets/images/trumbone.png"
import guitarist from "../../../../assets/images/guatrist.png"
import trumpet from "../../../../assets/images/avatar-2.png"
import keys from "../../../../assets/images/keys.png"
import EditBand from './editband'

const BAND_USER = [
    { role: 'Bass', name: 'Morgan Hayes', icon: bassimage },
    { role: 'Saxophone', name: 'Riley Bennett', icon: saxophone },
    { role: 'Drums', name: 'Logan Pierce', icon: drums },
    { role: 'Trombone', name: 'Jamie Sinclair', icon: trumbones },
    { role: 'Electric Guitar', name: 'Alex Rowan', icon: guitarist },
    { role: 'Trumpet', name: 'Hunter Black', icon: trumpet },
    { role: 'Keys', name: 'Rowan Scott', icon: keys }

]

const VOCALS_USER = [
    { name: 'Taylor Morgan', icon: guitarist },
    { name: 'Jordan Avery', icon: bassimage },
    { name: 'Quinn Riley', icon: keys },
]

const TECH_USER = [
    { name: 'Morgan Blake', icon: keys },
]

const SUPPORT_USER = [
    { name: 'Morgan Blake', icon: keys },
    { name: 'Taylor Morgan', icon: guitarist },
]

const Band = () => {

    const [editbandModal, setEditBand] = useState(false);

    return (
        <div className="bg-white dark:bg-dark-primary-50 pt-2 pb-[14px] xs:pl-[30px] pl-4 pr-2 rounded-2xl">
            <div className='flex gap-3 justify-between items-center'>
                <p className="text-xs leading-1.2 font-inter font-semibold text-heading-text dark:text-darkheading">BAND</p>
                <button
                    type='button'
                    onClick={() => setEditBand(true)}
                    className='w-9 h-9 rounded-large bg-[#F8F4FF] dark:bg-dark-primary-100 flex justify-center items-center'>
                    <Editicon />
                </button>

            </div>
            <div className='xs:pr-6'>
                <div className='border-b border-lightLavender-gray dark:border-lightGray pb-5'>
                    <div className='xs:pr-3 flex gap-3 justify-between items-center flex-wrap'>
                        {
                            BAND_USER.map((item, index) => <Banduser key={index} item={item} />)
                        }
                    </div>
                </div>
            </div>
            <div className='mt-6 xs:pr-6'>
                <p className="text-xs leading-1.2 font-inter font-semibold text-heading-text dark:text-darkheading">VOCALS</p>
                <div className='mt-2.5 border-b border-lightLavender-gray dark:border-lightGray pb-5'>
                    <div className='xs:pr-3 flex gap-3 justify-between items-center flex-wrap'>
                        {
                            VOCALS_USER.map((item, index) => <Banduser key={index} item={item} />)
                        }
                    </div>
                </div>
            </div>
            <div className='mt-6 xs:pr-6'>
                <p className="text-xs leading-1.2 font-inter font-semibold text-heading-text dark:text-darkheading">TECH</p>
                <div className='mt-2.5 border-b border-lightLavender-gray dark:border-lightGray pb-5'>
                    <div className='xs:pr-3 flex gap-3 justify-between items-center flex-wrap'>
                        {
                            TECH_USER.map((item, index) => <Banduser key={index} item={item} />)
                        }
                    </div>
                </div>
            </div>
            <div className='mt-6 xs:pr-6'>
                <p className="text-xs leading-1.2 font-inter font-semibold text-heading-text dark:text-darkheading">SUPPORT</p>
                <div className='mt-2.5'>
                    <div className='xs:pr-3 flex gap-3 justify-between items-center flex-wrap'>
                        {
                            SUPPORT_USER.map((item, index) => <Banduser key={index} item={item} />)
                        }
                    </div>
                </div>
            </div>

            {/* Edit Band Modal */}

            {
                editbandModal ?
                <div className="bg-[#0000009c] dark:bg-dark-primary-100 bg-opacity-30 dark:opacity-100 w-full h-full fixed top-0 left-0 flex justify-center items-center overflow-y-auto z-10"><EditBand handler={() => setEditBand(false)} /></div>
                    : null
            }
        </div>
    )
}

export default Band