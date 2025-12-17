import React from 'react'
import HeroSection from '../home/heroSection'
import Banner from './bnnner'
import Story from './story'
import Statements from './statement'
import OurTeam from './team'

const Ourstory = () => {
    return (
        <>
            <Banner bannerhaeding={'Built by musicians for musicians.'}/>
            <div className='w-full dark:bg-dark-primary-100'>
                <div className='max-w-[1440px] mx-auto xl:px-28 lg:px-10 sm:px-8 px-6 dark:bg-dark-primary-100'>
                    <Story />
                    <Statements />
                    <OurTeam />
                </div>
            </div>
        </>
    )
}

export default Ourstory