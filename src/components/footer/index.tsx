import Image from "next/image"
import footerLogo from "/src/assets/images/footerlogo.svg"
import Navitems from "../topBar/navbar/navitems"
import Link from 'next/link';
import { FOOTER_NAVBAR } from "@/dump/routes"
import RightScrollAnimation from "@/shared/rightscrollanimation"

import Facebook from '/src/assets/icons/social-media/facebook.svg';
import Twitter from '/src/assets/icons/social-media/twitter.svg';
import Instagram from '/src/assets/icons/social-media/instagram.svg';


const FOOOTER_NAVBAR_ANIMATION_DELAY = ["!delay-0", "!delay-150", "!delay-300", "!delay-500", "!delay-700"]

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-dark-primary-100">
            <div className='sm:pt-[69px] sm:pb-[90px] py-10 border-b border-[#f4f4f4]'>
                <div className='max-w-[1440px] mx-auto xl:px-28 lg:px-10 sm:px-8 px-6 flex md:flex-nowrap flex-wrap gap-5 md:justify-between justify-center items-center'>
                    <div className='md:max-w-sm md:text-left text-center'>
                        <Link href={'/'}>
                            <Image src={footerLogo} alt="footerlogo" className="md:mx-0 mx-auto dark:invert" />
                        </Link>
                        <p className="sm:mt-[60px] mt-8 text-base text-dark-gray dark:text-darkText font-light">
                            Soundcheck is a comprehensive scheduling and booking application designed specifically for managing gigs and shows for bands and artists.
                        </p>
                    </div>
                    <div>
                        <ul className="list-none md:h-6 flex flex-wrap lg:gap-10 gap-6 items-center  sm:mt-12 mt-5">
                            {
                                FOOTER_NAVBAR.map((item, index) => <Navitems key={index} item={item} className="!text-dark-gray dark:!text-darkText" />)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div id="contact-us" className="max-w-[1440px] mx-auto py-6 xl:px-28 lg:px-10 sm:px-8 px-6 flex sm:flex-nowrap flex-wrap gap-5 sm:justify-between justify-center items-center">
                <p className="sm:max-[400px]  w-full sm:text-base sm:text-left text-center text-sm text-dark-gray dark:text-darkText font-light">© 2024 Soundcheck (Scheduler). All rights reserved.</p>
                <div className="flex gap-5 items-center">

                    <a href="void:javascript(0)" className="md:w-[51px] w-10 md:h-[51px] h-10 rounded-full bg-light-purple dark:bg-dark-primary-50 flex justify-center items-center">
                        <Image src={Facebook} alt="facebook-icon" width={14} height={25} className="dark:invert"/>
                    </a>


                    <a href="void:javascript(0)" className="md:w-[51px] w-10 md:h-[51px] h-10 rounded-full bg-light-purple dark:bg-dark-primary-50 flex justify-center items-center">
                        <Image src={Twitter} alt="twitter-x-icon" width={23} height={23} className="dark:invert"/>
                    </a>


                    <a href="void:javascript(0)" className="md:w-[51px] w-10 md:h-[51px] h-10 rounded-full bg-light-purple dark:bg-dark-primary-50 flex justify-center items-center">
                        <Image src={Instagram} alt="instagram-icon" width={51} height={51} className="dark:invert"/>
                    </a>

                </div>
            </div>
        </footer >
    )
}

export default Footer