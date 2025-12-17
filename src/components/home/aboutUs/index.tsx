import Image from "next/image";
import Avatar1 from "/src/assets/images/avatar-1.png"
import Avatar2 from "/src/assets/images/avatar-2.png"
import Avatar3 from "/src/assets/images/avatar-3.png"
import RightScrollAnimation from "@/shared/rightscrollanimation";


const AVATAR_ANIMATION_DELAY = ["!delay-0", "!delay-150", "!delay-300"]

const AboutUs = () => {
    return (
        <section id="about-us" className="bg-white w-full dark:bg-dark-primary-100">
            <div className="max-w-[1440px] mx-auto xl:px-28 lg:px-10 sm:px-8 px-6 pt-16">
                <div className="bg-primary-100 dark:bg-dark-primary-50 rounded-[40px] xl:pt-36 xl:pb-32 lg:py-20 sm:py-16 py-10 xl:px-28 lg:px-16 sm:px-10 px-5 flex md:flex-nowrap flex-wrap md:gap-5 gap-10 justify-between items-start">
                    <div className="md:max-w-sm w-full ">
                        <h2 className="lg:text-[79.72px] md:text-6xl text-4xl leading-1.2 text-white dark:text-darkheading font-inter font-bold md:mt-6">About Us</h2>
                        <div className="mt-6 flex items-center relative">
                            {
                                [Avatar1, Avatar2, Avatar3].map((avatar, index) => {
                                    return (
                                        <div key={index} className={`w-[65px] h-[65px] rounded-full ${index > 0 ? "-ml-5" : ""}`}>
                                            <RightScrollAnimation className={`${AVATAR_ANIMATION_DELAY[index]}`}>
                                                <Image src={avatar} alt="avatar" width={65} height={65} />
                                            </RightScrollAnimation>
                                        </div>

                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="md:max-w-lg w-full">
                        <p className="sm:text-base text-sm font-medium text-white dark:text-darkText ">
                            Soundcheck is a technology company specializing in the development  and provision of a digital platform (mobile app) for band leaders and artists in the music industry.
                        </p>
                        <p className="sm:text-base text-sm font-medium text-white dark:text-darkText  sm:mt-14 mt-8">
                            The primary service offered by Soundcheck is a comprehensive scheduling  and booking application designed specifically for managing gigs and shows for bands and  artists. This application includes features for tracking various details related to performances,  such as dates, venues, setlists, and logistical arrangements.
                        </p>
                        <a href="void:javascript(0)" className="mt-8 sm:w-40 w-[136px] bg-white dark:bg-dark-primary-100 rounded-large sm:py-3 py-2.5 flex gap-[14px] justify-center items-center sm:text-base text-sm font-semibold text-heading-text dark:text-darkText capitalize font-aptos hover:scale-90 duration-200">
                            <RightScrollAnimation>
                                <span className="">View More</span>
                            </RightScrollAnimation>

                            <div className="sm:w-7 w-6 sm:h-7 h-6 rounded-full bg-light-purple dark:bg-dark-primary-50 flex justify-center items-center">
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 1C6.5 0.723857 6.27614 0.5 6 0.5L1.5 0.5C1.22386 0.5 1 0.723857 1 1C1 1.27614 1.22386 1.5 1.5 1.5L5.5 1.5L5.5 5.5C5.5 5.77614 5.72386 6 6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1ZM1.35355 6.35355L6.35355 1.35355L5.64645 0.646446L0.646447 5.64645L1.35355 6.35355Z" fill="#fff" />
                                </svg>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default AboutUs