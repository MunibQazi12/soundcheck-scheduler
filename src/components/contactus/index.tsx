import RightupArrow from '@/assets/svg/rightuparrow'
import React from 'react'
import Banner from '../ourstory/bnnner'

const Contactus = () => {
  return (
    <>
      <Banner bannerhaeding={'Contact Us'} />
      <section className='w-full h-full bg-lightLavender dark:bg-dark-primary-100 flex justify-center items-center px-5'>
        <div className='max-w-2xl w-full mx-auto py-[84px]	px-1'>
          <h2 className='sm:text-[42px] text-4xl leading-1.2 text-heading-text dark:text-darkheading font-bold text-center font-manrope'>Get In Touch!</h2>
          <form action="" className='mt-7 w-full'>
            <div className='w-full'>
              <input
                type="text"
                placeholder='Your Name'
                className='py-4 px-[18px] font-light bg-white dark:bg-dark-primary-50 rounded-[5px] w-full h-[54px] text-base text-heading-text placeholder:text-heading-text dark:text-darkheading placeholder:dark:text-darkheading border border-[#F4F4F4] dark:border-lightGray'
              />
            </div>
            <div className='mt-2.5 w-full'>
              <input
                type="text"
                placeholder='Email'
                className='py-4 px-[18px]  font-light bg-white dark:bg-dark-primary-50 rounded-[5px] w-full h-[54px] text-base text-heading-text placeholder:text-heading-text dark:text-darkheading placeholder:dark:text-darkheading border border-[#F4F4F4] dark:border-lightGray'
              />
            </div>
            <div className='mt-2.5 w-full'>
              <textarea
                placeholder='Message'
                className='py-4 px-[18px]  font-light bg-white dark:bg-dark-primary-50 rounded-[5px] w-full h-[144px] text-base text-heading-text placeholder:text-heading-text dark:text-darkheading placeholder:dark:text-darkheading border border-[#F4F4F4] dark:border-lightGray'
              />
            </div>
            <button className='mt-8 xs:w-[180px] w-full mx-auto bg-primary-100 dark:bg-dark-primary-50 rounded-md py-3 flex justify-center items-center gap-2 text-base text-white dark:text-darkheading'>
              Send <div className='w-7 h-7 rounded-full bg-white dark:bg-dark-primary-100 flex justify-center items-center'><RightupArrow /> </div>
            </button>
          </form>
          <div className='mt-[60px] '>
            <p className='text-[22px] leading-normal text-heading-text dark:text-darkheading text-center font-inter font-light'>Or contact us directly</p>
            <p className='sm:text-4xl text-3xl leading-normal text-heading-text dark:text-darkheading text-center font-bold font-manrope'>info@sndchk.com</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactus