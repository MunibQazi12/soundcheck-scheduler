'use client'
import { useState } from 'react'
import FaqAccordion from './accordion'

const FAQS_INFO = [
    {
        id: 1,
        question: 'What is Soundcheck?',
        answer: 'Soundcheck is a mobile* and web-based app designed for music professionals to streamline communication, file sharing and improve coordination for events. Use us to manage your bands, book artists for venues and organize events. \n\n *Mobile app coming soon',
    },
    {
        id: 2,
        question: 'Is Soundcheck suitable for both small bands and large music organizations?',
        answer: 'Yes, Soundcheck is designed to be inclusive and scalable, making it suitable for both small 2-3 person bands and large entertainment companies. Our flexible, user-friendly interface caters to the diverse needs of music professionals, ensuring that everyone can benefit from our comprehensive event management tools.'
    },
    {
        id: 3,
        question: 'Can I use Soundcheck offline during gigs?',
        answer: 'Absolutely! Soundcheck offers offline access for gigs where internet service might not be available. You can download all necessary information beforehand, ensuring that you have all the details you need right at your fingertips, even without a connection.'
    },
    {
        id: 4,
        question: 'How does Soundcheck integrate with other tools and apps I already use?',
        answer: 'Soundcheck seamlessly integrates with popular third-party apps, enhancing its functionality and ensuring that all your tools work together harmoniously. Google/Apple Calendar, Dropbox, Google Drive, iReal - these are just a few of the apps that we have integrated with to make your life a lot easier.'
    },
    {
        id: 5,
        question: 'Who can use Soundcheck?',
        answer: 'Our platform is designed for, but not limited to, Bands, Artists, Booking Agents, Music Venues, Event Coordinators, Rehearsal Spaces and Music Studios. If you don’t fall into these professions and you’d like to chat about your use-case, please send us an email - \n info@sndchk.com!'
    },
    {
        id: 6,
        question: 'Will Soundcheck book me for gigs?',
        answer: 'No, we are not a booking service, but you can use our platform to manage gigs you’re already booked for or plan to book bands for in the future.'
    }
]

const Faqs = () => {

    const [togggle, setToggle] = useState(-1);

    return (
        <section className="bg-white w-full dark:bg-dark-primary-100">
            <div className="max-w-[1440px] mx-auto xl:px-28 lg:px-10 sm:px-8 px-6 pt-16">
                <h2 className='max-w-[752px] w-full mx-auto lg:text-[45px] text-4xl text-center leading-1.2 text-heading-text dark:text-darkheading font-manrope font-bold md:mb-24 mb-16'>Being a music professional just got a whole lot easier.</h2>
                <div className="bg-primary-100 dark:bg-dark-primary-50 rounded-[40px] lg:py-20 py-16 lg:px-[144px] md:px-24 px-8">
                    <h2 className='lg:text-[45px] text-4xl text-center leading-1.2 text-white dark:text-darkheading font-manrope font-bold lg:mb-[85px] mb-16'>
                        FAQs
                    </h2>
                    {
                        FAQS_INFO.map((item, index) => <FaqAccordion
                            key={index}
                            item={item}
                            toggleHandler={() => setToggle((preState) => item.id === preState ? -1 : item.id)}
                            toggle={togggle === item.id}
                        />)
                    }
                    <p className='mt-[74px] sm:text-base text-sm text-white dark:text-darkheading font-inter font-semibold'>Still have questions? Feel free to <a href='#' className='underline underline-offset-4'>Contact Us</a> to learn more!</p>
                </div>
            </div>
        </section>
    )
}

export default Faqs