import Circledarrowicon from '@/assets/svg/circledarrowicon'
import Visioneyeicon from '@/assets/svg/visioneyeicon'
import React from 'react'

const Statements = () => {
  return (
    <div className='lg:py-36 md:py-24 py-16 flex md:flex-nowrap flex-wrap gap-8 justify-between'>
        <div className='md:w-1/2 md:max-w-none max-w-xl md:mx-0 mx-auto bg-primary-100 dark:bg-dark-primary-50 rounded-2.5xl shadow-customShadow dark:shadow-darkShadow sm:p-10 p-5'>
            <div className='sm:w-24 w-20 sm:h-24 h-20 bg-white dark:bg-dark-primary-100 rounded-large shadow-customShadow dark:shadow-darkShadow flex justify-center items-center'>
                <Circledarrowicon />
            </div>
            <p className='mt-6 sm:text-[32px] text-2xl leading-1.2 text-white dark:text-darkheading font-bold font-manrope'>Our Mission</p>
            <p className='mt-5 sm:text-base text-sm text-white dark:text-darkText whitespace-pre-line font-light'>To revolutionize the music industry by providing innovative solutions that enhance collaboration, streamline processes, and empower artists to focus on their creativity and performance.<br/><br/> Our mission is to foster a supportive environment where music professionals can thrive and succeed on their terms.</p>
        </div>
        <div className='md:w-1/2 md:max-w-none max-w-xl md:mx-0 mx-auto bg-[#A347FF1A] dark:bg-dark-primary-50 rounded-2.5xl shadow-customShadow dark:shadow-darkShadow sm:p-10 p-5'>
            <div className='sm:w-24 w-20 sm:h-24 h-20 bg-white dark:bg-dark-primary-100 rounded-large shadow-customShadow dark:shadow-darkShadow flex justify-center items-center'>
                <Visioneyeicon />
            </div>
            <p className='mt-6 sm:text-[32px] text-2xl leading-1.2 text-primary-100 dark:text-darkheading font-bold font-manrope'>Our Vision</p>
            <p className='mt-5 sm:text-base text-sm text-primary-100 dark:text-darkText whitespace-pre-line font-light'>To revolutionize the music industry by providing innovative solutions that enhance collaboration, streamline processes, and empower artists to focus on their creativity and performance. Our mission is to foster a supportive environment where music professionals can thrive and succeed on their terms.</p>
        </div>
    </div>
  )
}

export default Statements